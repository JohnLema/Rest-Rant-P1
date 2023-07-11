const router = require('express').Router()

app.get('/', (req, res) => {
    let places = [{
        name: 'Italian',
        city: 'Queens',
        state: 'NY',
        cuisines: 'Pizza, Pasta',
        pic: '/images/Pizza.jpg'
      }, {
        name: 'Mexican',
        city: 'Austin',
        state: 'TX',
        cuisines: 'Taco, Tamales',
        pic: '/images/Tamales.jpg'
      }]
      
    res.render('places/index', { places })
  })
  
  

module.exports = router
