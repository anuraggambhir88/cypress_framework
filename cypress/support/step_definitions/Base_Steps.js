import {When, Then, Before, After} from "@badeball/cypress-cucumber-preprocessor"


Before(()=>{
    cy.log("Pre Execution Starting-----")
    cy.clearLocalStorage()
})

Before({tags:"@smoke"},()=>{
    cy.log("Pre Execution for Smoke")
})


After(()=>{
    cy.log("Tear down Execution for Test Case")
})

When("I wait for {int} seconds",(seconds)=>{
    cy.wait(seconds*1000)
})