const express = require('express');
const router = express.Router();
const userController = require('../controllers/productController');

router.get('/', produtController.getAllProducts);
router.post('/', produtController.createProduct);

module.exports = router;