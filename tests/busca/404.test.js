module.exports = {
    '@tags': ['smoke', '404'],
    
    before: (browser) => {
        let login = browser.page.login()
        let sideBar = browser.page.sidebar()

        login
            .with('zumbi@dospalmares.com', 'pwd123')

        sideBar
            .expectLoggedUser('Quilombo')
    },
    'quando eu busco um título não cadastrado': (browser) => {
        let movie = browser.page.movie()

        movie
            .setValue('@searchInput', 'Não é mais um besteirol americado')
            .click('@searchIcon')
    },
    'então devo ver uma mensagem de alerta': (browser) => {
        let movie = browser.page.movie()

        movie
            .waitForElementPresent('@alertDanger', 10000)
            .assert.containsText('@alertDanger', 'Puxa! não encontramos nada aqui :(')
    }
}