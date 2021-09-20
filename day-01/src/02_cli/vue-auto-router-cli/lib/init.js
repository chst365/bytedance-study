// 欢迎界面
const { promisify } = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')
const chalk = require('chalk')
const log = content => console.log(chalk.green(content));
const { clone } = require('./download')
const open = require('open')
const spawn = async (...args) => {
    // 同步 Promise api
    const { spawn } = require('child_process')
    return new Promise(resolve => {
        const proc = spawn(...args)
        // 输出流 子进程 合并到 主进程
        proc.stdout.pipe(process.stdout)
        proc.stderr.pipe(process.stderr)
        proc.on('close', () => {
            resolve()
        })
    })

}
module.exports = async name => {
    clear()
    const data = await figlet('ByteDance YYDS')
    log(data)

    // 项目模板
    log('🚀创建项目' + name)
    // await clone('github:su37josephxia/vue-template', name)

    // 下载依赖 npm i 
    log('🚀安装依赖...')
    spawn('npm', ['install'], { cwd: `./${name}` })
    log(chalk.green(`
        安装完成：
        To get Start
        ===================
        cd ${name}
        npm run serve
        ===================
        `))
    open('http:localhost:8080')
    spawn('npm', ['run', 'serve'], { cwd: `./${name}` })
}