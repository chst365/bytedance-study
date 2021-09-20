const fs = require('fs')
// 异步IO
// fs.readFile

// 同步读取 二进制文件 图片 视频
const data = fs.readFile
    // fs.readFile('./conf.js', (err, data) => {
    //     // 错误优先的回调
    //     if (err) throw err;
    //     console.log(data.toString())
    // })

    (async () => {
        const fs = require(fs)
        const { promisify } = require('util')
        const readFile = promisify(fs.readFile)
        const data = await readFile('./conf.js')
        console.log(data.toString())
    })