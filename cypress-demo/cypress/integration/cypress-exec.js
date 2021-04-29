describe('测试',()=>{
  it('test',()=>{
    cy.exec('echo jane Lane')
    .its('stdout').should('contain','jane Lane')
cy.log(`Platform ${Cypress.platform} architecture ${Cypress.arch}`)  

if(Cypress.platform == 'win32'){
cy.exec('print cypress.json')
    .it('stderr').should('be.empty')
}else{
cy.exec('cat cypress.json')
.its('stderr').should('be.empty')
cy.exec('pwd')
    .its('code').should('eq',0)
}
  cy.visit('https://example.cypress.io/commands/connectors')
  cy.get('.connectors-list>li').then(function($lis){
    expect($lis).to.have.length(3)
    expect($lis.eq(0)).to.contain('Walk the dog')
    expect($lis.eq(1)).to.contain('Feed the cat')
    expect($lis.eq(2)).to.contain('Write JavaScript')
  })
 

  cy.request('https://jsonplaceholder.cypress.io/comments')
  .should((response) => {
    expect(response.status).to.eq(200)
    expect(response.body).to.have.length(500)
    expect(response).to.have.property('headers')
    expect(response).to.have.property('duration')
  })

  })
})