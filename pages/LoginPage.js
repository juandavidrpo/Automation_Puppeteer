import BasePage from './basePage';

/**
 * Representa la clase LoginPage
 * @version 1.0.0 2022-04-08
 * @author Juan David
 * @since 1.0.0
 */
export default class LoginPage extends BasePage {
    constructor() {
        super();
        /**
         * Atributos y selectores correspondientes
         */
        this.navBar = "//div[@class='menu-wrapper']";
        this.inputEmail = "input[placeholder='Email']";
        this.inputPassword = "input[placeholder='Password']";
        this.submitButton = '(//button[1][@type="submit"])[1]';
        this.loginPageText = "//h2[contains(text(),'Hi,')]";
    }

    /**
     * Método para cargar la pagina
     */
    async visit() {
        await page.goto('https://phptravels.net/login');
        await page.waitForXPath(this.navBar);
        const url = this.getUrl();

        console.log(url);
    }

    /**
     * Método para iniciar sesión
     * @param email correo a ingresar
     * @param password contraseña a ingresar
     */
    async login(email, password) {
        await page.waitForSelector(this.inputEmail);
        await this.type(this.inputEmail, email);
        await this.type(this.inputPassword, password);
        await this.click(this.submitButton);
    }

    /**
     * Método para validar login exitoso, esperando que cargue
     * el texto y el navbar
     */
    async validateLogin() {
        await page.waitForXPath(this.loginPageText);
        await page.waitForXPath(this.navBar);
    }
}
