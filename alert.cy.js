describe('ALERT PRACTICE',() => {
    it('Alert Box',() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // cy.get('#alertbtn').click()
        // cy.on('window:alert',(AlertBox) => {
        //     expect(AlertBox).to.eq('Hello , share this practice page and share your knowledge')
        //     return false;
        // })


        //CONFIRM
        //cy.visit('')
    })
    it('test',()=>{
        cy.get('#mousehover').trigger('mouseover').get('.mouse-hover-content a').eq(1).click({force: true})
    })
})