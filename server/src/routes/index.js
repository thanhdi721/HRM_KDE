const UserRouter = require('./UserRouter');
const RolesRouter = require('./ApprovalRouter');
const GatePassRouter = require('./GatePassRouter');

const routes = (app) => {
    app.use('/api/user', UserRouter);
    app.use('/roles', RolesRouter);
    app.use('/gate-pass', GatePassRouter)
    app.get('/', (req, res) => {
        res.send('Welcome to the home page!');
    });
}

module.exports = routes;
