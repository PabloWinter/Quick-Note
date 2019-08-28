const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');

require('./database');


// Application settings 
app.set('port', process.env.PORT || 8000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', handlebars({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
// Set view engine
app.set('view engine', '.hbs');

// Middlewares
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('method'));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// Routes
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Server is listening on port 8000
app.listen(app.get('port'), () => {
    console.log("server is listening on", app.get('port'));
})