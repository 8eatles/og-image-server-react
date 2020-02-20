const express = require('express');
const imageUploader = require('../middlewares/imageUploader');
const imageController = require('../controllers/image');

const router = express.Router();

router.get('/:id', imageController.get);
router.post('/', [imageUploader, imageController.create]);

module.exports = router;
