module.exports = {
    'senha não informada': (browser) => {
        let login = browser.page.login()

        login
            .with('404@yahoo.com', '')
            .expectAlertInfo('Opps. Cadê a senha?')
    }
}