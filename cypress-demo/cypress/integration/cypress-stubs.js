describe('stubs',()=>{
    it('测试',()=>{
        const obj = {
            foo(){}
        }
        const spy = cy.spy(obj,'foo').as('anyArgs')
        obj.foo()
        expect(spy).to.be.called


        const now  = new Date(Date.UTC(2017,2,14)).getTime()
        cy.clock(now)
        cy.visit('https://example.cypress.io/commands/spies-stubs-clocks')
        cy.get('#clock-div').click()
         .should('have.text', '1489449600')
    })
})