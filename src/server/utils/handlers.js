exports.errorHandler = (res, err) => res.status(400).send({ msg: err });
