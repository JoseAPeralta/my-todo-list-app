const validateName = (name) => {
    const minLength = 5
    const maxlength = 20

    if (name.length < minLength || name.length > maxlength) {
        return { isValid: false, message: `Must be between ${minLength} and ${maxlength} characters` }
    }
    if (typeof (name) === String) {
        return {
            isValid: false, message: `Must contain letters`
        }
    }

    return {
        isValid: true
    }
}

const validateDate = (myDate) => {
    const month = myDate.getMonth()
    const today = new Date()

    if (!(myDate instanceof Date)) {
        return {
            isValid: false, message: `Must a valid date`
        }
    } else if (!(month >= today.getMonth())) {
        return {
            isValid: false, message: `The month must be equal to or greater than the current one`
        }
    }
    return { isValid: true }
}
module.exports = { validateName, validateDate }