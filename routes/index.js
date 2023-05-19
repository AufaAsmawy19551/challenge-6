const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yaml');
const fs = require('fs');
const documentation = fs.readFileSync('./documentation.yml', 'utf8');
const swaggerDocument = YAML.parse(documentation);

router.use('/api-documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.get('/', (req, res) => res.status(200).json({ message: 'Welcome to Factory RESTfull API' }));

const supplier = require('../controllers/supplier');

router.get('/suppliers', supplier.index); // get all supplier
router.post('/suppliers', supplier.store); // create new supplier
router.get('/suppliers/:id', supplier.show); // get detail supplier
router.put('/suppliers/:id', supplier.update); // update supplier
router.delete('/suppliers/:id', supplier.destroy); // delete supplier

module.exports = router;
