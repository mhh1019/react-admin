const adminToken = 'token'
export const setSessionItem = (val) => {
    sessionStorage.setItem(adminToken,val)
}
export const getSessionItem = () => {
    return sessionStorage.getItem(adminToken)
}