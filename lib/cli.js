'use strict';

const {
    Command
} = require('commander');
const program = new Command();

const packageInfo = require('../package.json');

console.log('@slucky/cli', packageInfo.version);

program
    .version(packageInfo.version)

program
    .command('init')
    .description('初始化一个项目')
    .alias('i')
    .action(() => {
        require('./cmd/init').init();
    });

program
    .command('add')
    .description('新建一个项目')
    .alias('a')
    .action(() => {
        require('./cmd/add').add();
    });

program
    .command('delete')
    .description('删除一个项目')
    .alias('d')
    .action(() => {
        require('./cmd/delete').delete();
    });

program
    .command('update')
    .description('修改一个项目')
    .alias('u')
    .action(() => {
        require('./cmd/update').update();
    });

program
    .command('list')
    .description('修改一个项目')
    .alias('l')
    .action(() => {
        require('./cmd/list').list();
    });

program.parse(process.argv);