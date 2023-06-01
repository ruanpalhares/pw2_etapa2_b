const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const User = require('../models/User')

const Thought = db.define('THOUGHT', {
    title: {
        type: DataTypes.STRING
        ,allowNull: false
    }
})

Thought.belongsTo(User)
User.hasMany(Thought)