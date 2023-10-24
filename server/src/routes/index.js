const UserRouter = require('./UserRouter');
const GatePassRouter = require('./GatePassRouter');

const routes = (app) => {
    app.use('/api/user', UserRouter);
    app.use('/gate-pass', GatePassRouter);
}

module.exports = routes;
