const isBalanced = require('./simple-brackets')

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

test('brackets must be in the correct order', () => {
    expect(isBalanced('())(()')).toBe(false)
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
