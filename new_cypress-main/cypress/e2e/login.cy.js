describe('Проверка авторизации', function () {

    it('Верный логин и пароль', function () {
         cy.visit('https://login.qa.studio/'); // Сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Цвет
         cy.get('#mail').type('german@dolnikov.ru'); // Логин
         cy.get('#pass').type('iLoveqastudio1'); // Пароль
         cy.get('#loginButton').click(); // Нажать Войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверили
         cy.get('#messageHeader').should('be.visible'); // Надпись видна
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден
     })
    it('Верный логин и неверный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Цвет
         cy.get('#mail').type('german@dolnikov.ru'); // Логин
         cy.get('#pass').type('iLoveqastudio10'); // Пароль неверный
         cy.get('#loginButton').click(); // Нажать Войти
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверили
         cy.get('#messageHeader').should('be.visible'); // Надпись видна
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден
     })
    it('Логин валидация без @', function () {
         cy.visit('https://login.qa.studio/'); // Сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Цвет
         cy.get('#mail').type('germandolnikov.ru'); // Логин без @
         cy.get('#pass').type('iLoveqastudio1'); // Пароль верный
         cy.get('#loginButton').click(); // Нажать Войти
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверили
         cy.get('#messageHeader').should('be.visible'); // Надпись видна
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден
     })
    it('Забыли пароль', function () {
         cy.visit('https://login.qa.studio/'); // Сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Цвет
         cy.get('#forgotEmailButton').click(); // Нажать Забыли пароль
         cy.get('#mailForgot').type('german@dolnikov.ru'); // Почта
         cy.get('#restoreEmailButton').click(); // Код
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверили
         cy.get('#messageHeader').should('be.visible'); // Надпись видна
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден
     })
    it('Неправильный логин и правильный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Цвет
         cy.get('#mail').type('germani@dolnikov.ru'); // Логин неверный
         cy.get('#pass').type('iLoveqastudio1'); // Пароль
         cy.get('#loginButton').click(); // Нажать Войти
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверили
         cy.get('#messageHeader').should('be.visible'); // Надпись видна
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден
     })
    it('Строчные буквы', function () {
         cy.visit('https://login.qa.studio/'); // Сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Цвет
         cy.get('#mail').type('GerMan@Dolnikov.ru'); // Логин
         cy.get('#pass').type('iLoveqastudio1'); // Пароль
         cy.get('#loginButton').click(); // Нажать Войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверили
         cy.get('#messageHeader').should('be.visible'); // Надпись видна
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден
     })
 }) 