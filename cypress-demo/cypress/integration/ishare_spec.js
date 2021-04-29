describe('ishare-主站',()=>{
    it('visit ishare-web-pc-node',()=>{
        cy.visit('https://ishare.iask.sina.com.cn/')
        cy.window().then(win => {
            cy.stub(win, 'open').callsFake((url, target) => {
              expect(target).to.be.undefined
              return win.open.wrappedMethod.call(win, url, '_self')
            }).as('open')
          })
        cy.get('.search-input')
          .type('考研')
        cy.get('.icon-search').click();

   
    // cy.get('.search-screen').click()    
    cy.get('.search-result .current')
      .should('contain','综合')  
    })
})