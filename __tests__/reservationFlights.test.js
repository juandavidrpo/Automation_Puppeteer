import LoginPage from '../pages/LoginPage';
import FlightsPage from '../pages/FlightsPage';
import NavBar from '../components/NavBar';

let loginPage;
let flightsPage;
let navBar;

describe('Iniciar sesion en la pagina', () => {
    beforeAll(async () => {
        loginPage = new LoginPage();
        flightsPage = new FlightsPage();
        navBar = new NavBar();
    });

    test('Iniciar sesion', async () => {
        await loginPage.visit();
        await loginPage.login('user@phptravels.com', 'demouser');
    }, 25000);

    test('Validar que pase el login', async () => {
        await loginPage.validateLogin();
    }, 25000);

    test('Ir a la pagina de vuelos', async () => {
        await navBar.validateNavBarIsPresent();
        await navBar.selectMenuItem('flights');
    }, 25000);

    test('Validar que estemos en vuelos y completar campos', async () => {
        await flightsPage.validatePage();
        await flightsPage.selectFlight('Medellin', 'Tokyo', '22-09-2022', 2);
    }, 25000);

    test('Validar que se haya buscado el vuelo', async () => {
        await flightsPage.validateFlights();
    }, 25000);
});
