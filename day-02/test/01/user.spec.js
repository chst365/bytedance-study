const User = require('./user')

test('should getName', () => {
    const user = new User('xiaoming')
    user.setName('xiaozhang')
    expect(user.getName()).toBe('xiaozhang')
})