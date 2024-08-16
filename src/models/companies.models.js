const { DataTypes } = require('sequelize');
const { db } = require('../config');
const User = require('./users.models');

const Company = db.define(
  'companies',
  {
    companies_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: User,
        key: 'id'
      }
    },
    photo_profile: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM(
        'Technology',
        'Healthcare',
        'Finance',
        'Education',
        'Fashion',
        'Entertainment',
        'Manufacturing',
        'Construction',
        'Consulting',
        'Energy',
        'Food',
        'Automotive'
      ),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    website: {
      type: DataTypes.STRING(255)
    },
    email_company: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    phone_number: {
      type: DataTypes.STRING(20),
      unique: true
    },
    address: {
      type: DataTypes.TEXT
    }
  },
  {
    tableName: 'companies',
    freezeTableName: true,
    timestamps: true
  }
);

Company.belongsTo(User, { foreignKey: 'companies_id' });

module.exports = Company;
