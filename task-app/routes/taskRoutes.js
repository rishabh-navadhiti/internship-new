const express = require('express');

const router = express.Router();

const path = require('path');

// fire base admin initialization and service account

const admin = require('firebase-admin');
const serviceAccount = require('/home/rishabh/Development/internship-new/task-app/test-project-f4196-firebase-adminsdk-fbsvc-0457eb4b60.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

router.post('/tasks', async(req, res) => {
    try {
        const newTask = req.body;
        const taskRef = await db.collection('tasks').add(newTask);
        res.status(200).send({ id: taskRef.id})
    } catch (err) {
        res.status(500).send({ error: 'Failed to create task', details: err.message });
    }
});

router.get('/tasks', async(req, res) => {
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

router.get('/tasks/:id', async (req, res) => {
    const taskId = req.params.id;

    try {    
        const doc = await db.collection('tasks').doc(taskId).get()
        const task = {id: doc.id , ...doc.data()}
        res.status(200).send(task);
    } catch (err) {
        console.log("Error retrieving task:", err);
        res.status(500).send({error: 'Failed to fetch the task', details: err.message})
    }
});

router.put('/tasks/:id', async (req, res) => {
    const taskId = req.params.id;
    console.log(req.body);
    
    try {
        await db.collection('tasks').doc(taskId).set(req.body, { merge: true });
        res.status(200).send({message: 'Task updated successfully'});
    } catch (err) {
        res.status(500).send({error: `Failed to update task`, details: err.message})
    }
    

})

router.delete('/tasks/:id', async (req, res) => {
  try {
    const taskId = req.params.id;

    // Attempt to delete the document
    await db.collection('tasks').doc(taskId).delete();

    res.status(200).send({ message: `Task with ID ${taskId} deleted successfully.` });
  } catch (err) {
    res.status(500).send({ error: 'Failed to delete task', details: err.message });
  }
});

module.exports = router;
