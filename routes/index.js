const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yaml');
const fs = require('fs');
const documentation = fs.readFileSync('./documentation.yml', 'utf8');
const swaggerDocument = YAML.parse(documentation);

router.use('/api-documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.get('/', (req, res) => res.status(200).json({ message: 'Welcome to Factory RESTfull API' }));

module.exports = router;
