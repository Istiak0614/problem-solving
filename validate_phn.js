
function isValidBdMobileNumber(phoneNumber) {
    const pattern = /^(01|8801|\+8801)[3-9][0-9]{8}$/;

    if (pattern.test(phoneNumber)) {
        return true;
    } else {
        return false;
    }
}
console.log(isValidBdMobileNumber("01712345678")); 