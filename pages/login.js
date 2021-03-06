var loginActions = {
    with: function (email, pass) {
        return this
            .navigate()
            .waitForElementVisible('@form', 3000)
            .setValue('@emailInput', email)
            .setValue('@passInput', pass)
            .click('@loginButton')
    },
    expectAlertDanger: function (text) {
        return this
            .waitForElementVisible('@alertDanger', 3000)
            .assert.containsText('@alertDanger', text)
    },
    expectAlertInfo: function (text) {
        return this
            .waitForElementVisible('@alertInfo', 3000)
            .assert.containsText('@alertInfo', text)
    }
}

module.exports = {
    url: '/login',
    commands: [loginActions],
    elements: {
        form: '.card-login',
        emailInput: '#emailId',
        passInput: '#passId',
        loginButton: '.login-button',
        alertDanger: '.alert-danger',
        alertInfo: '.alert-info'
    }
}