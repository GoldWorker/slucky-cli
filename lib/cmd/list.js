'use strict';

const templates = require('../../templates.json')
const format = require('../format')

exports.list=()=>{
    format.table(templates)
}