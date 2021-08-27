const express = require('express')
const app = express()
const port = 3000
const host = '0.0.0.0'
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

//Loads the handlebars module
const handlebars = require('express-handlebars');
//Sets our app to use the handlebars engine
app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
}));

//registering session
app.use(cookieParser('secriamet'));
app.use(session({cookie: { maxAge: 60000 }}));
app.use(flash());
app.use(function (req, res, next) {
    app.locals.success = req.flash('success')
    app.locals.danger = req.flash('danger')
    next();
});

app.use(express.json())
app.use(express.urlencoded({extended: true}))

require('./routes')(app);

app.listen(port, () => {
    console.log(`App listening at ${host}:${port}`)
})