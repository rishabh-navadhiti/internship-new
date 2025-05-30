const express = require('express');

// fire base admin initialization and service account

const admin = require('firebase-admin');
const serviceAccount = require('./test-project-f4196-firebase-adminsdk-fbsvc-533eab065e.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const app = express();
app.use(express.json());
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Firebase APP!');
});

app.post('/tasks', async(req, res) => {
    try {
        const newTask = req.body;
        const taskRef = await db.collection('tasks').add(newTask);
        res.status(200).send({ id: taskRef.id})
    } catch (err) {
        res.status(500).send({ error: 'Failed to create task', details: err.message });
    }
});

app.get('/tasks', async(req, res) => {
    try {
        const snapshot = await db.collection('tasks').get();
        const tasks = [];
        snapshot.forEach(doc => {
            tasks.push({id: doc.id, ...doc.data()});
        });
        res.status(200).send(tasks);
    } catch (err) {
        res.status(500).send({ error: 'Failed to fetch tasks', details: err.message})
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


