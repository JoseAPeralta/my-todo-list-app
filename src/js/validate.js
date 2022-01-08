const validateName = (name) => {
	const minLength = 5
	const maxlength = 20

	if (name.length < minLength || name.length > maxlength) {
		return {
			isValid: false,
			message: `Must be between ${minLength} and ${maxlength} characters`,
		}
	}
	if (typeof name === String) {
		return {
			isValid: false,
			message: `Must contain letters`,
		}
	}

	return {
		isValid: true,
	}
}

const validateDate = (myDate) => {
	const today = new Date()
	const todayValue = Math.floor(today.valueOf() / 100)
	const myDateValue = Math.floor(myDate.valueOf() / 100)

	if (!(myDate instanceof Date)) {
		return {
			isValid: false,
			message: `Must a valid date`,
		}
	}
	if (todayValue > myDateValue) {
		return {
			isValid: false,
			message: `The month and year must be equal to or greater than the current one`,
		}
	}
	return { isValid: true }
}
module.exports = { validateName, validateDate }
