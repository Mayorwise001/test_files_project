const capitalize = require('../Js/capitalize')

describe('capitalize', () => {
    test('return first letter of string capitalized', () => {
        expect(capitalize("aa")).toBe('Aa');
});
test('return first letter of string capitalized', () =>{
    expect(capitalize("the boy")).toBe('The boy');
});

})