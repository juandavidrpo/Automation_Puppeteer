export default class BasePage {
    async getTitle() {
        return await page.title();
    }

    async getUrl() {
        return await page.url();
    }

    async getText(selector) {
        try {
            await page.waitForSelector(selector);
            return await page.$eval(selector, (element) => element.textContent);
        } catch (err) {
            throw new Error(`Error al obtener el texto del selector ${selector}`);
        }
    }

    async getAttribute(selector, attribute) {
        try {
            await page.waitForSelector(selector);
            return await page.$eval(selector, (element) => element.getAttribute(attribute));
        } catch (err) {
            throw new Error(`Error al obtener el atributo del selector ${selector}`);
        }
    }

    async getValue(selector) {
        try {
            await page.waitForSelector(selector);
            return await page.$eval(selector, (element) => element.value);
        } catch (err) {
            throw new Error(`Error al obtener el valor del selector ${selector}`);
        }
    }

    async getCount(selector) {
        try {
            await page.waitForSelector(selector);
            return await page.$$eval(selector, (element) => element.length);
        } catch (err) {
            throw new Error(`Error al obtener el número de elementos del selector ${selector}`);
        }
    }

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

    async type(selector, text, option = {}) {
        try {
            await page.waitForSelector(selector);
            await page.click(selector, { clickCount: 3 });
            await page.type(selector, text, option);
        } catch (err) {
            throw new Error(`Error al escribir en el selector ${selector}`);
        }
    }

    async doubleClick(selector) {
        try {
            await page.waitForSelector(selector);
            await page.click(selector, { clickCount: 2 });
        } catch (err) {
            throw new Error(`Error al escribir en el selector ${selector}`);
        }
    }

    async wait(time) {
        return page.waitForTimeout(time);
    }
}
