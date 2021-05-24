const { validateName, validateDate } = require('../js/validate')

describe('Set of name validations scripts', () => {

    test('should is string data type', () => {
        const expected = true
        const result = validateName('12356').isValid
        expect(expected).toBe(result)
    })

    test('should the name dont have less than 5 characters', () => {
        const expected = false
        const result = validateName('1234').isValid
        expect(expected).toBe(result)
    })

    test('should the name dont have more than 20 characters', () => {
        const expected = false
        const moreThan50Character = String(Math.floor(Math.random() * (100 - 20) + 20))
        const result = validateName(moreThan50Character).isValid
        expect(expected).toBe(result)
    })

})

describe('Set of date validations scripts', () => {

    test('should is date data type', () => {
        const expected = true
        const result = validateDate(new Date()).isValid
        expect(expected).toBe(result)
    })

    test('should the month equal or greater than current', () => {
        const expected = false
        const lastMonth = new Date()
        lastMonth.setMonth(lastMonth.getMonth() - 2)
        const result = validateDate(lastMonth).isValid
        expect(expected).toBe(result)
    })
})
