const { DataTypes } = require('sequelize');
const { db } = require('../config');
const Company = require('./companies.models');

const Job = db.define(
  'jobs',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    companies_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Company,
        key: 'companies_id'
      }
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    what_will_you_do: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    what_will_you_need: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    category: {
      type: DataTypes.ENUM(
        'Information',
        'Technology',
        'Healthcare',
        'Finance',
        'Education',
        'Sales',
        'Marketing',
        'Engineering',
        'Customer_Service',
        'Human_Resources',
        'Energy',
        'Food',
        'Automotive',
        'Fashion',
        'Construction'
      ),
      allowNull: false
    },
    job_type: {
      type: DataTypes.ENUM('WFO', 'WFH'),
      allowNull: false
    },
    salary: {
      type: DataTypes.BIGINT
    },
    capacity: {
      type: DataTypes.INTEGER
    },
    closing_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    is_open: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  },
  {
    tableName: 'jobs',
    freezeTableName: true,
    timestamps: true
  }
);

Job.belongsTo(Company, { foreignKey: 'companies_id' });

module.exports = Job;
