const subtract = require('./subtract');

test('test subtracting two numbers', ()=>{
    expect(subtract(2,1)).toBe(1);
});