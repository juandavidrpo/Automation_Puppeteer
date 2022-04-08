import BasePage from '../pages/basePage';

/**
 * Representa la clase NavBar
 * @version 1.0.0 2022-04-08
 * @author Juan David
 * @since 1.0.0
 */
export default class NavBar extends BasePage {
    constructor() {
        super();
        /**
         * Atributos y selectores correspondientes
         */
        this.navBar = '.menu-wrapper';
        this.menu = {
            home: "//a[normalize-space()='Home']",
            hotels: "//a[normalize-space()='Hotels']",
            flights: "//a[normalize-space()='flights']",
            tours: "//a[normalize-space()='Tours']",
            visa: "//a[normalize-space()='visa']",
            blog: "//a[normalize-space()='Blog']",
            offers: "//a[normalize-space()='Offers']",
        };
    }

    /**
     * Método para validar que el navbar haya cargado
     * correctamente esperando por el selector y los Xpath
     */
    async validateNavBarIsPresent() {
        await page.waitForSelector(this.navBar);
        await page.waitForXPath(this.menu.home);
        await page.waitForXPath(this.menu.hotels);
        await page.waitForXPath(this.menu.flights);
        await page.waitForXPath(this.menu.tours);
        await page.waitForXPath(this.menu.visa);
        await page.waitForXPath(this.menu.blog);
        await page.waitForXPath(this.menu.offers);
    }

    /**
     * Método para seleccionar
     * @param menuItem da click a la propiedad
     */
    async selectMenuItem(menuItem) {
        await this.click(this.menu[menuItem]);
    }
}
