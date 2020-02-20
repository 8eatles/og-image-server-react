module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    title: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: 'image.hotcho.co',
    },
    description: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: 'image.hotcho.co',
    },
    encoding: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    mimetype: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    filename: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    path: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
  }, {});
  // Image.associate = function(models) {
  //   // associations can be defined here
  // };
  return Image;
};
