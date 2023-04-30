const add = require('./add');

test('test adding two numbers', ()=>{
    expect(add(1,2)).toBe(3);
});