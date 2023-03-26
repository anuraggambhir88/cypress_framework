import {When, Then} from "@badeball/cypress-cucumber-preprocessor"

When("I enter my username {string}",(username)=>{
    cy.get("#text").type(username)
})

When("I enter my password {string}",(password)=>{
    cy.get("#password").type(password)
})

Then("I should get {string}",(logintext)=>{
    cy.on("window:alert",(str)=>{
        expect(str).to.be.equals(logintext)
    })
})