const isBalanced = require('./complex-brackets')

//TODO Add test cases with a variety of brackets

test('empty string is balanced', () => {
    expect(isBalanced('')).toBe(true)
})

test('open brackets must always be closed', () => {
    expect(isBalanced('(')).toBe(false)
})

test('every closing bracket must have a corresponding open bracket', () => {
    expect(isBalanced(')()')).toBe(false)
})

test('simple case with open and close brackets', () => {
    expect(isBalanced('()')).toBe(true)
})

test('various balanced examples', () => {
    expect(isBalanced('(())')).toBe(true)
    expect(isBalanced('()()')).toBe(true)
    expect(isBalanced('((((()))))')).toBe(true)
    expect(isBalanced('(())(())')).toBe(true)
})

test('various unbalanced examples', () => {
    expect(isBalanced('())')).toBe(false)
    expect(isBalanced('()(()')).toBe(false)
    expect(isBalanced('((((())))))')).toBe(false)
})
