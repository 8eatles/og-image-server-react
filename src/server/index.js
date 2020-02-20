const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const imageRouter = require('./routes/image');
const db = require('./db/models');

const app = express();


try {
  db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0', null, { raw: true });
  db.sequelize.sync();
} catch (e) {
  console.error(e);
  process.exit(1);
}

// For React
app.use(express.static('dist'));

// For Uploaded Images
// http://127.0.0.1:8080/uploads/images/2020-02-20/image-1582203849916.png
app.use('/uploads', express.static('uploads'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/images', imageRouter);

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
