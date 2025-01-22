/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {

    let uniqueEmails = new Set()

    function removePlus(email) {
        let [localName, domain] = email.split('@')
        localName = localName.split('+')[0]
        return localName + '@' + domain
    }

    function getDots(email) {
        let [localName, domain] = email.split('@')
        localName = localName.split('.').join('')
        return localName + '@' + domain
    }

    for (let email of emails) {
        email = removePlus(email)
        email = getDots(email);
        uniqueEmails.add(email);
    }

    return uniqueEmails.size

};