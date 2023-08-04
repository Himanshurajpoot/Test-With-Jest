const sub = require('./sub')

test('sub 10 - 5 is equel 5',()=>{
    expect(sub(10 , 5)).toBe(5);
})


test('sub 100 - 5 is not  equel 5',()=>{
    expect(sub(100 , 5)).not.toBe(5);
})