/*************************/
/*** Import used modules */
const express = require('express')
const marcelCtrl = require('../controllers/marcel')

/***************************/
/*** Get Expresss's router */
let router = express.Router()

/*********************************************/
/*** Middleware to log date for each request */
router.use( (req, res, next) => {
    const event = new Date()
    console.log('Marcel Time:', event.toString())
    next()
})


/************************************/
/*** Routes for marcel resource */

router.get('/', marcelCtrl.getAllMarcels)

router.get('/:id', marcelCtrl.getMarcel)

router.put('', marcelCtrl.addMarcel)

router.patch('/:id', marcelCtrl.updateMarcel)
    
router.delete('/:id', marcelCtrl.deleteMarcel)

module.exports = router