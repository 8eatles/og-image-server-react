const error = require('../utils/handlers').errorHandler;
const validate = require('../utils/validators');
const model = require('../db/models').Image;

exports.get = async (req, res) => {
  const result = await model.findByPk(req.params.id).catch(err => error(res, err));
  res.send(result);
};

exports.create = async (req, res) => {
  validate.image(res, 'image', req.file);
  validate.string(res, 'title', req.body.title);
  validate.string(res, 'description', req.body.description);
  const result = await model.create({
    ...req.body,
    ...req.file,
  }).catch(err => error(res, err));
  res.send(result);
};
