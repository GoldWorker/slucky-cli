const Table = require('cli-table');

exports.table = (templates) => {
    const table = new Table({
        head: ['projectName', 'url', 'branch', 'des'],
        style: {
            head: ['cyan']
        }
    });
    const keys = Object.keys(templates)
    while (keys.length) {
        const key = keys.shift()
        const {
            project,
            url,
            branch,
            des
        } = templates[key]
        table.push([project, url, branch, des])
    }
    console.log(table.toString());
}