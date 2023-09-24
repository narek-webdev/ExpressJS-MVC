const DashboardController = require('../controllers/dashboard.controller')
const { requireAuth } = require('../middlewares/auth.middleware')

module.exports = (app) => {
    app.get('/dashboard', requireAuth, DashboardController.index)
}
