module.exports = {
    'email não informado': (browser) => {
        let login = browser.page.login()

        login
            .with('', '123abc')
            .expectAlertInfo('Opps. Cadê o email?')
    }
}