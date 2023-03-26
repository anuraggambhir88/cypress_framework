
class Base {

    navigate(){
    
        cy.fixture('config.json').then((data)=>{
            cy.visit(data.baseUrl)
        })
    }
}

module.exports = new Base()