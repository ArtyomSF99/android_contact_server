const { Router } = require('express')
const router = new Router()
const apiController = require('../controller/apiController')

router.get('/contacts', apiController.getContacts)
router.post('/contact', apiController.addContact)
router.put('/contact', apiController.updateContact)
router.delete('/contact', apiController.deleteContact)



module.exports = router