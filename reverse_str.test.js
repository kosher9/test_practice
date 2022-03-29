const reverseString = require('./reverse_str')

test('check if string is reverted', () => {
    expect(reverseString("hello")).toMatch("olleh")
})

test('check if sentence is reverted', () => {
    expect(reverseString("hello I'm glad.")).toMatch(".dalg m'I olleh")
})