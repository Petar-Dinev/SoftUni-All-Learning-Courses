const authController = require("../controllers/authController")
const courseController = require("../controllers/courseController")
const homeController = require("../controllers/homeController")


module.exports = (app) => {
   app.use('/', homeController)
   app.use('/auth', authController)
   app.use('/courses', courseController)
   app.use('*', (req, res) => {
      res.render('404', {
         title: 'Not Found'
      })
   })
}