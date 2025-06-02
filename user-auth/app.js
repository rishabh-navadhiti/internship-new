const express = require('express');
const getAccessToken = require('./googleAuth');
const axios = require('axios');

const DB_BASEURL = 'https://firestore.googleapis.com/v1/projects/ user-cred-a841c /databases/(default)/documents/users';

const app = express();

app.use(express.json());

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



