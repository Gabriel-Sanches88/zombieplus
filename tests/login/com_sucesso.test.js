module.exports = {
    'login com sucesso': (browser) => {
        let login = browser.page.login()
        let sideBar = browser.page.sidebar()

        login
            .with('zumbi@dospalmares.com', 'pwd123')

        sideBar
            .expectLoggedUser('Quilombo')
    }
}