class DashboardController {
    index = (_, res) => {
        res.render('./dashboard/dashboard')
    }
}

module.exports = new DashboardController()
