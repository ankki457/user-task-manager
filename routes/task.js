const express = require('express');
const Task = require('../model/Task');
const User = require('../model/User');

const app = express.Router();

app.get('/', async (req, res,next) => {
    try {
        const users = await User.query();
        res.render('newTask', { users });
    } catch (err) {
        console.error(err);
        return next('Internal server error');
    }
});

app.post('/assigntask', async (req, res,next) => {
    const { user_id, task_name, task_type } = req.body;
    try {
        await Task.query().insert({ user_id, task_name, task_type });
        res.redirect('/api/v1/tasks/showTasks');
    } catch (err) {
        console.error(err);
        return next('Error Creating the Task');
    }
});

app.post('/updateTask/:id', async (req, res, next) => {
    const {id} = req.params;
    const {  task_name, task_type } = req.body;

    try {
        const updatedTask = await Task.query().findById(id).patch({ task_name, task_type });

        if (!updatedTask) return next('Task not found');

        res.redirect('/api/v1/tasks/showTasks');
    } catch (err) {
        console.error(err);
        next(err); 
    }
});

app.get('/fetchalltask/:id' ,async (req,res,next) => {
    const id = req.params.id;
    try {
        const tasks = await Task.query().where('user_id', id).withGraphFetched('user');
        const user = await User.query().findById(id);
        console.log(user.name);
        res.render('showTasks', { tasks  ,username:user.name});
    } catch (err) {
        console.error(err);
        return next('Internal server error');
    }
})

app.get('/updateTask/:id', async (req, res,next) => {
    const id = req.params.id;
    try {
        const task = await Task.query().findById(id);
        const username = req.query.username
        if (!task) return next('Task not found');
        res.render('updateTask', { task,username }); 
    } catch (error) {
        console.error('Error fetching task:', error);
        next(error); 
    }
});

app.get('/showTasks', async (req, res,next) => {
    try {
        const tasks = await Task.query().withGraphFetched('user');
        res.render('showTasks', { tasks });
    } catch (err) {
        console.error(err);
        return next('Internal server error');
    }
});

module.exports = app;
