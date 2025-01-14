const express = require('express');
const router = express.Router();
const User = require('../model/User');
const Task = require('../model/Task');
const excelJS = require('exceljs');

router.get('/excel', async (req, res) => {
    try {
        const users = await User.query();
        const tasks = await Task.query();

        const workbook = new excelJS.Workbook();
        const userSheet = workbook.addWorksheet('Users');
        const taskSheet = workbook.addWorksheet('Tasks');

        userSheet.columns = [
            { header: 'ID', key: 'id', width: 10 },
            { header: 'Name', key: 'name', width: 30 },
            { header: 'Email', key: 'email', width: 30 },
            { header: 'Mobile', key: 'mobile', width: 15 }
        ];

        taskSheet.columns = [
            { header: 'ID', key: 'id', width: 10 },
            { header: 'User ID', key: 'user_id', width: 10 },
            { header: 'Task Name', key: 'task_name', width: 30 },
            { header: 'Task Type', key: 'task_type', width: 10 }
        ];

        users.forEach(user => {
            userSheet.addRow(user);
        });

        tasks.forEach(task => {
            taskSheet.addRow(task);
        });

        res.setHeader(
            'Content-Type',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        );
        res.setHeader(
            'Content-Disposition',
            'attachment; filename=' + 'users_tasks.xlsx'
        );

        await workbook.xlsx.write(res);
        res.end();
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
