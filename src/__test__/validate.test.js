const { validateName, validateDate } = require('../js/validate')

describe('Set of name validations scripts', () => {
	test('should is string data type', () => {
		const expected = true
		const result = validateName('12356').isValid
		expect(result).toBe(expected)
	})

	test('should the name dont have less than 5 characters', () => {
		const expected = false
		const result = validateName('1234').isValid
		expect(result).toBe(expected)
	})

	test('should the name dont have more than 20 characters', () => {
		const expected = false
		const moreThan50Character = String(
			Math.floor(Math.random() * (100 - 20) + 20)
		)
		const result = validateName(moreThan50Character).isValid
		expect(result).toBe(expected)
	})
})

describe('Set of date validations scripts', () => {
	test('should is date data type', () => {
		const expected = true
		const result = validateDate(new Date()).isValid
		expect(result).toBe(expected)
	})

	test('should the month equal or greater than current', () => {
		const lastMonth = new Date()
		const today = new Date()
		const nextMonth = new Date()
		lastMonth.setMonth(lastMonth.getMonth() - 1)
		nextMonth.setMonth(lastMonth.getMonth() + 1)

		expect(validateDate(lastMonth).isValid).toBe(false)
		expect(validateDate(today).isValid).toBe(true)
		expect(validateDate(nextMonth).isValid).toBe(true)
	})

	test('should the day equal or greater than current', () => {
		const lastMonth = new Date()
		const today = new Date()
		const nextMonth = new Date()
		lastMonth.setDate(lastMonth.getDate() - 1)
		nextMonth.setDate(lastMonth.getDate() + 1)

		expect(validateDate(lastMonth).isValid).toBe(false)
		expect(validateDate(today).isValid).toBe(true)
		expect(validateDate(nextMonth).isValid).toBe(true)
	})
})
