const add = require('./add')

test('should 1+1', () => {
    const a = 1
    const b = 1
    const r = add(a, b)
    expect(r).toBe(2)
})