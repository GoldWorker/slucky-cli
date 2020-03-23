'use strict'

const prompts = require('prompts');
const templates = require('../../templates.json')
const fs = require('fs');
const chalk = require('chalk');
const format =require('../format')

exports.add = () => {
    (async () => {
        const option = [{
            type: 'text',
            name: 'project',
            message: '项目名称?',
            validate: value => value ? true : '请输入内容'
        }, {
            type: 'text',
            name: 'url',
            message: '项目仓库地址?',
            validate: value => value ? true : '请输入内容'
        }, {
            type: 'text',
            name: 'branch',
            message: '项目分支?',
            initial: 'master',
            validate: value => value ? true : '请输入内容'
        }, {
            type: 'text',
            name: 'des',
            message: '项目描述?',
            validate: value => value ? true : '请输入内容'
        }]
        const response = await prompts(option);

        const {
            project
        } = response

        if (templates[project]) {
            console.log(chalk.red('模板已存在'))
            process.exit()
        }

        templates[project] = response

        fs.writeFile(__dirname + '/../../templates.json', JSON.stringify(templates), 'utf-8', (err) => {
            if (err) {
                console.log(chalk.red('写入错误'))
                process.exit()
            }
            console.log(chalk.green('添加成功'))
            format.table(templates)
            process.exit();
        });
    })();
}