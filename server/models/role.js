module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    roleName: DataTypes.STRING,
  });

  Role.associate = function(models) {
    Role.hasMany(models.User, { foreignKey: 'roleId' });
    Role.hasMany(models.Menu, { foreignKey: 'roleId' });
  };

  return Role;
};
