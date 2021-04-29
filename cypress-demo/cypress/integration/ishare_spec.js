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

   
    cy.get('.search-screen').click({waitForAnimations: false})    
    cy.get('.search-result .current')
      .should('contain','综合')  
      cy.get('.search-result .screen-ele:nth-of-type(2)').click()
      cy.get('.landing-txt-list li:nth-child(1) .sts_8').click()
    })
})