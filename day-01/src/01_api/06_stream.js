const fs = require('fs')
// 1.png -> 2.png fs read write
const rs = fs.createReadStream('./1.jpg')
const ws = fs.createWriteStream('./2.jpg')
rs.pipe(ws)