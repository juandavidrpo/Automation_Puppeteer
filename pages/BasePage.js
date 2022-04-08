/**
 * Representa la clase BasePage
 * @version 1.0.0 2022-04-08
 * @author Juan David
 * @since 1.0.0
 */
export default class BasePage {
    /**
     * Representa el método del título
     * @returns el título de la pagina
     */
    async getTitle() {
        return await page.title();
    }

    /**
     *Representa el método de la url
     * @returns la url de la pagina
     */
    async getUrl() {
        return await page.url();
    }

    /**
     * Representa el método del texto
     * @param selector información del selector
     * @returns contenido del texto
     */
    async getText(selector) {
        try {
            await page.waitForSelector(selector);
            return await page.$eval(selector, (element) => element.textContent);
        } catch (err) {
            throw new Error(`Error al obtener el texto del selector ${selector}`);
        }
    }

    /**
     * Representa el método atributo
     * @param selector información del selector
     * @param attribute obtiene el atributo
     * @returns el atributo
     */
    async getAttribute(selector, attribute) {
        try {
            await page.waitForSelector(selector);
            return await page.$eval(selector, (element) => element.getAttribute(attribute));
        } catch (err) {
            throw new Error(`Error al obtener el atributo del selector ${selector}`);
        }
    }

    /**
     * Representa el método value
     * @param selector información del selector
     * @returns el contenido de value
     */
    async getValue(selector) {
        try {
            await page.waitForSelector(selector);
            return await page.$eval(selector, (element) => element.value);
        } catch (err) {
            throw new Error(`Error al obtener el valor del selector ${selector}`);
        }
    }

    /**
     * Representa el método de contar
     * @param selector información del selector
     * @returns la cantidad de elementos del selector
     */
    async getCount(selector) {
        try {
            await page.waitForSelector(selector);
            return await page.$$eval(selector, (element) => element.length);
        } catch (err) {
            throw new Error(`Error al obtener el número de elementos del selector ${selector}`);
        }
    }

    /**
     * Representa el método click
     * @param selector información del selector
     */
    async click(selector) {
        try {
            await page.waitForSelector(selector);
            await page.click(selector);
        } catch (err) {
            try {
                const element = await page.waitForXPath(selector);
                await element.click();
            } catch (err) {
                throw new Error(`Error al dar click al selector ${selector}`);
            }
        }
    }

    /**
     * Representa el método tipo
     * @param selector información del selector
     * @param text escribe el texto en el selector
     * @param option recibe un objeto en caso de ser requerido
     */
    async type(selector, text, option = {}) {
        try {
            await page.waitForSelector(selector);
            await page.click(selector, { clickCount: 3 });
            await page.type(selector, text, option);
        } catch (err) {
            throw new Error(`Error al escribir en el selector ${selector}`);
        }
    }

    /**
     * Representa el método doble click
     * @param selector información del selector
     */
    async doubleClick(selector) {
        try {
            await page.waitForSelector(selector);
            await page.click(selector, { clickCount: 2 });
        } catch (err) {
            throw new Error(`Error al escribir en el selector ${selector}`);
        }
    }

    /**
     * Representa el método de espera
     * @param time limite
     * @returns tiempo de espera
     */
    async wait(time) {
        return page.waitForTimeout(time);
    }
}
