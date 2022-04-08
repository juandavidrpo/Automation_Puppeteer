import BasePage from './basePage';

/**
 * Representa la clase FlightsPage
 * @version 1.0.0 2022-04-08
 * @author Juan David
 * @since 1.0.0
 */
export default class FlightsPage extends BasePage {
    constructor() {
        super();
        /**
         * Atributos y selectores
         */
        this.mainDiv = '.main_search';
        this.inputs = {
            from: '#autocomplete',
            to: '#autocomplete2',
            date: '#departure',
            passengers: '.dropdown-toggle.dropdown-btn.waves-effect',
            search: '#flights-search',
            firstOption: ".autocomplete-result[data-index='0']",
            moreAdultsPassengers: "(//i[@class='la la-plus'])[1]",
        };
    }

    /**
     * Método para validar la pagina correcta
     */
    async validatePage() {
        await page.waitForNavigation({ waitUntil: 'networkidle0' });
        await page.waitForSelector(this.mainDiv);
        await page.waitForSelector(this.inputs.from);
        await page.waitForSelector(this.inputs.to);
        await page.waitForSelector(this.inputs.date);
        await page.waitForSelector(this.inputs.passengers);
        await page.waitForSelector(this.inputs.search);
    }

    /**
     * Método para seleccionar los vuelos
     * @param from opción de partida
     * @param to opción de destino
     * @param date opción de fecha
     * @param passengers opción de cantidad de pasajeros
     */
    async selectFlight(from, to, date, passengers) {
        await this.type(this.inputs.from, from);
        await this.click(this.inputs.firstOption);

        await this.type(this.inputs.to, to);
        await this.click(this.inputs.firstOption);

        await this.type(this.inputs.date, date);

        if (passengers !== 1) {
            await this.click(this.inputs.passengers);
            for (let i = 0; i < passengers - 1; i++)
                await this.click(this.inputs.moreAdultsPassengers);
        }

        await this.click(this.inputs.search);
    }

    /**
     * Tiempo de espera en segundos
     */
    async validateFlights() {
        await this.wait(5);
    }
}
