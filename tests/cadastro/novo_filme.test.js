import pg from '../../lib/db'

let movieData = {}

module.exports = {
    before: (browser) => {
        movieData = {
            title: 'Resient Evil',
            status: 'Disponível',
            year: 2002,
            releaseDate: '01/05/2002',
            cast: ['Milla Jovovich', 'Ali Larter', 'Ian Glen', 'Shawn Roberts'],
            cover: 'resident-evil-2002.jpg',
            plot: 'A missão do esquadrão e da Alice é desligar a Rainha Vermelha e coletar dados sobre o incidente.'
        }

        pg.removeByTitle(movieData.title)

        let login = browser.page.login()
        let sideBar = browser.page.sidebar()

        login
            .with('zumbi@dospalmares.com', 'pwd123')

        sideBar
            .expectLoggedUser('Quilombo')
    },

    'quando eu faço o cadastro do filme': (browser) => {
        let movie = browser.page.movie()

        movie
            .createForm()
            .setValue('@titleInput', movieData.title)
            .selectStatus(movieData.status)
            .setValue('@yearInput', movieData.year)
            .setValue('@dateInput', movieData.releaseDate)
            .insertCast(movieData.cast)
            .setValue('@plotInput', movieData.plot)
            .uploadCover(movieData. cover)
            .click('@createButton')
    },
    'então devo ver o filme na lista': (browser) => {
        let movie = browser.page.movie()

        movie
            .waitForElementVisible('@list', 15000)            
            .assert.containsText('@list', movieData.title)
    }
}