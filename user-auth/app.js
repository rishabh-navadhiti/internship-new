const express = require('express');
const getAccessToken = require('./googleAuth');
const axios = require('axios');
const z = require('zod/v4')



const app = express();

app.use(express.json());

const registerSchema = z.object({
  fname: z.string().min(1),
  lname: z.string().min(1),
  email: z.email(),
  password: z.string().min(6)
});

app.post('/register', async (req, res) => {

  const user = req.body;

  try {
    const token = await getAccessToken();
    const response = axios.post(`${DB_BASEURL}`,
      {
        fields: {
          'fname': {stringValue: user.firstName},
          'lname': {stringValue: user.lastName},
          'email': {stringValue: user.email},
          'password': {stringValue: user.password}
        }
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }
    );
    res.send(response.data);
  } catch (err) {
    res.status(500).send({error: err.message});
  }
})



app.listen(3000, () => {
  console.log('Express listening on port 3000');
  
})