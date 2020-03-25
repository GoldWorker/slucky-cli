'use strict';

const prompts = require('prompts');
const templates = require('../../templates.json')
const fs = require('fs');
const chalk = require('chalk');
const format = require('../format')

exports.delete = () => {
    (async () => {
        format.table(templates)
        const option = [{
            type: 'text',
            name: 'project',
            message: '项目名称?',
            validate: value => value ? true : '请输入内容'
        }]

        const response = await prompts(option);

        if (!Object.keys(response).length) {
            console.log(chalk.yellow('程序中断'))
            process.exit();
        }
        
        const {
            project
        } = response

        if (project in templates) {
            delete templates[project]
            fs.writeFile(__dirname + '/../../templates.json', JSON.stringify(templates), 'utf-8', (err) => {
                if (err) {
                    console.log(chalk.red('删除失败'))
                    process.exit()
                }
                console.log(chalk.green('删除成功'))
                format.table(templates)
                process.exit();
            });
        } else {
            console.log(chalk.red('没有该模板'))
            process.exit();
        }
    })()
}