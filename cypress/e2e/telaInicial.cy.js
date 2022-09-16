describe('Fluxo da tela inicial', () => {
  it('Visitar tela', () => {
    cy.visit('localhost:3000'); 

  })
  it('Testar o cadastro de uma transação de entrada', () => {
    cy.get('[data-cy="nova-transacao"]').click();
    cy.get('[data-cy="titulo-transacao"]').type('moedinhas por apresentar na guilda de front');
    cy.get('[data-cy="valor-transacao"]').clear();
    cy.get('[data-cy="valor-transacao"]').type('10');
    cy.get('[data-cy="button-entrada"]').click();
    cy.get('[data-cy="categoria-transacao"]').type('KT');
    cy.get('[data-cy="cadastrar-transacao"]').click();
  })
  it('Testar o cadastro de uma transação de saida', () => {
    cy.get('[data-cy="nova-transacao"]').click();
    cy.get('[data-cy="titulo-transacao"]').type('lanche');
    cy.get('[data-cy="valor-transacao"]').clear();
    cy.get('[data-cy="valor-transacao"]').type('40');
    cy.get('[data-cy="button-saida"]').click();
    cy.get('[data-cy="categoria-transacao"]').type('alimento');
    cy.get('[data-cy="cadastrar-transacao"]').click();
  })
})