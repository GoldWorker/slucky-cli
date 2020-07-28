'use strict'

const exec = require('child_process').exec;
const chalk = require('chalk');
const ora = require('ora');
const spinner = ora('Loading unicorns');
spinner.color = 'green';

exports.test = () => {
    (async () => {
        exec(`mkdir 123 && cd 123`, (err) => {
            
        });
    })()
}