(async () => {
    const Sequelize = require('sequelize')
    const sequelize = new Sequelize('kaikeba', 'root', '123456', {
        host: 'localhost',
        dialect: 'mysql', // 方言
        operatorsAliases: false
    })

    const Fruit = sequelize.define("Fruit", { name: { type: Sequelize.STRING(20), allowNull: false }, price: { type: Sequelize.FLOAT, allowNull: false }, stock: { type: Sequelize.INTEGER, defaultValue: 0 } });
    let ret = await Fruit.sync()
    ret = await Fruit.create({
        name: '香蕉',
        price: 3.5
    })
    console.log('create', ret);
})()