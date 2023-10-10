const UserRouter = require('./UserRouter');

const routes = (app) => {
    app.use('/user', UserRouter);
    app.get('/', (req, res) => {
        res.send('Welcome to the home page!');
    });
}

module.exports = routes;
