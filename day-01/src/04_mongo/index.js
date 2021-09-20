(async () => {
    const { MongoClient } = require('mongodb')
    const client = new MongoClient(
        'mongodb:localhost:27017',

    )
    let ret = await client.connect()
    const fruits = db.collection('fruits')
    ret = await fruits.insertOne({
        name: '芒果',
        price: 3
    })

})()