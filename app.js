const express = require('express');
const { Model } = require('objection');
const Knex = require('knex');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const knexConfig = require('./knexfile');
const userRoutes = require('./routes/User.js');
const taskRoutes = require('./routes/task.js');
const exportRoutes = require('./routes/export');
const Error = require('./lib/Error.js');


const app = express();
const PORT = 3000;

const knex = Knex(knexConfig.development);
Model.knex(knex);


app.engine('handlebars', exphbs.engine({
    helpers: {
        eq: function (v1, v2) {
            return v1 === v2;
        }
    },
    layoutsDir: path.join(__dirname, 'views/layouts'),  
    defaultLayout: 'main', 
    extname: '.handlebars'  
}));
app.set('view engine', 'handlebars');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/users', userRoutes);

app.use('/api/v1/tasks', taskRoutes);

app.use('/api/v1/export', exportRoutes);

app.get('/' , (req,res,next) => {
   res.redirect('/api/v1/users/showusers');
});

app.use('*' ,(req,res,next) => {
    return res.status(404).json({
        message: 'Page not found'
    });
})

app.use(Error);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
