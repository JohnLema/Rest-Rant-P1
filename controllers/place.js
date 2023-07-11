const router = require('express').Router()

app.get('/', (req, res) => {
    let places = [{
        name: 'Italian',
        city: 'Queens',
        state: 'NY',
        cuisines: 'Pizza, Pasta',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Mexican',
        city: 'Austin',
        state: 'TX',
        cuisines: 'Taco, Tamales',
        pic: 'http://placekitten.com/250/250'
      }]
      
    res.render('places/index', { places })
  })
  
  

module.exports = router
