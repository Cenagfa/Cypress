describe('Покупка аватара', function () {
   it('e2e тест на покупку нового аватара для тренера', function () {
        cy.visit('https://pokemonbattle.me/');                       // Сайт
        cy.get('input[type="email"]').type('USER_LOGIN');            // Логин
        cy.get('input[type="password"]').type('USER_PASSWORD');      // Пароль
        cy.get('button[type="submit"]').click();                     // Подтвердить
        cy.get('.header__btns > [href="/shop"]').click();            // Магазин
        cy.get('.available > button').first().click();               // Первый доступный аватар
        cy.get('.credit').type('4620869113632996');                  // Карта
        cy.get('.k_input_ccv').type('125');                          // CVV
        cy.get('.k_input_date').type('1225');                        // Срок
        cy.get('.k_input_name').type('Cenagfa');                     // Имя
        cy.get('.pay-btn').click();                                  // Оплатить
        cy.get('#cardnumber').type('56456');                         // СМС
        cy.get('.payment__submit-button').click();                   // Отправить
        cy.contains('Покупка прошла успешно').should('be.visible');  // Проверка
    });
});
