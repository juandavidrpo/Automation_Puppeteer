import BasePage from '../pages/basePage';

export default class NavBar extends BasePage {
    constructor() {
        super();
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

    async selectMenuItem(menuItem) {
        await this.click(this.menu[menuItem]);
    }
}
