describe('Google Search Automation', () => {

  const searchTerm =
    'Acessibilidade em plataformas de ensino remoto';

  it('Deve realizar pesquisa no Google e validar resultados', () => {

    cy.log('Acessando Google');

    cy.visit('/', {

      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
      }

    });

    cy.log('Aceitando cookies se necessário');

    cy.get('body').then(($body) => {

      if ($body.text().includes('Aceitar tudo')) {

        cy.contains('Aceitar tudo')
          .click();
      }

    });

    cy.log('Validando campo de pesquisa');

    cy.get('textarea[name="q"]', {
      timeout: 20000
    })
      .should('be.visible')
      .click()
      .type(searchTerm, {
        delay: 120
      });

    cy.log('Executando pesquisa');

    cy.get('form')
      .submit();

    cy.log('Validando resultados');

    cy.get('#search', {
      timeout: 30000
    })
      .should('exist')
      .and('be.visible');

    cy.get('h3')
      .should('have.length.greaterThan', 0);

    cy.log('Capturando screenshot');

    const timestamp = Date.now();

    cy.screenshot(
      `google-search-${timestamp}`,
      {
        capture: 'fullPage'
      }
    );

  });

});