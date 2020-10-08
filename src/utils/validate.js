export const reg_password = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/

const reg_email = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/

export const validate_email = (val) => {
    return reg_email.test(val)
}

export const validate_password = (val) => {
    return reg_password.test(val)
}