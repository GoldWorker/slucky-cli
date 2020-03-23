'use strict'

const prompts = require('prompts');
const templates = require('../../templates.json')
const exec = require('child_process').exec;
const chalk = require('chalk');
const format = require('../format');
const ora = require('ora');
const spinner = ora('Loading unicorns');
spinner.color = 'green';

exports.init = () => {
    (async () => {
        const preOption = [{
            type: 'text',
            name: 'project',
            message: '项目名称?',
            validate: value => value ? true : '请输入内容'
        }]
        format.table(templates)
        const preResponse = await prompts(preOption);

        const {
            project
        } = preResponse

        if (!templates[project]) {
            console.log(chalk.red('模板不存在'))
            process.exit()
        }

        const {
            url,
            branch
        } = templates[project]

        spinner.start();

        exec(`git clone ${url} ${project} && cd ${project} && git checkout ${branch}`, (err) => {
            if (err) {
                spinner.fail('模板初始化失败')
                process.exit()
            }
            // 删除 git 文件
            exec('cd ' + projectName + ' && rm -rf .git', (err, out) => {
                if(err){
                    spinner.fail('.git删除失败，但模板初始化成功，依然可以使用。')
                    process.exit()
                }
                spinner.succeed('模板初始化成功')
                process.exit()
            });
        });
    })()
}