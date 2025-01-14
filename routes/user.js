const express = require('express');
const app = express.Router();

const User = require('../model/User');
const Error = require('../lib/Error');


app.get('/', (req, res) => {
    res.render('addUser');
});

app.post('/createuser', async (req, res,next) => {
    const { name, email, mobile } = req.body;
    try {
        await User.query().insert({ name, email, mobile });
        res.redirect('/api/v1/users/showusers');
    } catch (err) {
        console.error(err);
        return next('Error Creating the User');
    }
});

app.get('/showusers', async (req, res,next) => {
   

    try {
        const users = await User.query();
        const page = req.query.page || 1;
        const limit = 10; 
        const totalUsers = users.length;
        const totalPages = Math.ceil(totalUsers / limit);
        const offset = (page - 1) * limit;
        const paginatedUsers = users.slice(offset, offset + limit);
        res.render('showUsers', { 
            users:paginatedUsers,
            totalPages,
            currentPage: page
         });
    } catch (err) {
        console.error(err);
        return next('Internal server error');
    }
});

module.exports = app;
