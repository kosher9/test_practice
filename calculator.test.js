const Calculator = require('./calculator')

const calculator = new Calculator()

describe('add', () => {
    test('add 3 to 1', () => {
        expect(calculator.add(1, 3)).toBe(4)
    })

    test('add -1 to 0', () => {
        expect(calculator.add(0, -1)).toBe(-1)
    })

    test('add -1 to -1', () => {
        expect(calculator.add(-1, -1)).toBe(-2)
    })
})

describe('substract', () => {
    test('substract 1 from 3', () => {
        expect(calculator.substract(3, 1)).toBe(2)
    })

    test('substract 0 from 0', () => {
        expect(calculator.substract(0, 0)).toBe(0)
    })

    test('substract 1 from 0', () => {
        expect(calculator.substract(0, 1)).toBe(-1)
    })
})

describe('multiply', () => {
    test('multiply 0 by 0', () => {
        expect(calculator.multiply(0, 0)).toBe(0)
    })

    test('multiply 1 by 0', () => {
        expect(calculator.multiply(1, 0)).toBe(0)
    })

    test('multiply 0 by -1', () => {
        expect(calculator.multiply(0, -1)).toBe(-0)
    })
    
})

describe('divide', () => {
    test('divide 4 by 2', () => {
        expect(calculator.divide(4, 2)).toBe(2)
    })

    test('divide -4 by 1', () => {
        expect(calculator.divide(-4, 1)).toBe(-4)
    })

    test('divide 0 by 0', () => {
        expect(calculator.divide(0, 0)).toBe(NaN)
    })
    
})