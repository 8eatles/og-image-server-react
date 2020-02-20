const _ = require('lodash');

const number = (res, name, value) => {
  if (!value || !_.isNumber(value)) {
    res.status(401).send(`${name} is not number. (${value})`);
  }
};

const string = (res, name, value) => {
  if (!value || !_.isString(value) || !value.trim()) {
    res.status(401).send(`${name} is not string. (${value})`);
  }
};

const object = (res, name, value) => {
  if (!value || !_.isObject(value)) {
    res.status(401).send(`${name} is not object. (${value})`);
  }
};

const image = (res, name, value) => {
  if (!value || !_.isObject(value)) {
    res.status(401).send(`${name} is not image. (${value})`);
  }

  const {
    originalname,
    encoding,
    mimetype,
    destination,
    filename,
    path,
    size,
  } = value;

  string(res, `${name}.originalname`, originalname);
  string(res, `${name}.encoding`, encoding);
  string(res, `${name}.mimetype`, mimetype);
  string(res, `${name}.destination`, destination);
  string(res, `${name}.filename`, filename);
  string(res, `${name}.path`, path);
  number(res, `${name}.size`, size);
};

module.exports = {
  object,
  number,
  string,
  image,
};
