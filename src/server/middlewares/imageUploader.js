const fs = require('fs');
const path = require('path');
const multer = require('multer');
const moment = require('moment');

const ImageUploader = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      // if (req.user && req.user.user && req.user.user.id)
      let destination = 'uploads/images/';
      destination = path.join(destination, `${moment().format('YYYY-MM-DD')}/`);
      if (!fs.existsSync(destination)) {
        fs.mkdirSync(destination, { recursive: true });
      }
      cb(null, destination);
    },
    filename: (req, file, cb) => {
      cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    },
  }),
}).single('image');
// .fields(
//   [
//     { name: 'image', maxCount: 1 },
//   ],
// );

// const ImageUploader = multer({ dest: 'uptest' }).single('image');

module.exports = ImageUploader;
