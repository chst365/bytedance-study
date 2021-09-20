const http = require('http')
const fs = require('fs')
http.createServer((request, response) => {
    // console.log('a request', getPrototypeChain(response));
    // TODO request response 都是流
    // response.end('Hi Node')


    const { url, method } = request
    if (url === '/' && method === 'get') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                response.writeHead(500, {
                    'Content-Type': 'text/plain;charset=utf-8'
                    // 中文
                })
                response.end('500 服务器挂了')
                return
            }
            response.statusCode = 200
            response.setHeader('Content-Type', 'text/html')
            response.end(data)
        })
    } else {
        response.statusCode = 400
        response.setHeader('Content-Type', 'text/plain;charset=utf-8')
        response.end('404 没这玩意')
    }
})
    .listen(3000, () => {
        console.log('Server at 3000');
    })


function getPrototypeChain(obj) {
    const protoChain = []
    while (obj = Object.getPrototypeOf(obj)) {
        protoChain.push(obj)
    }
    return protoChain
}