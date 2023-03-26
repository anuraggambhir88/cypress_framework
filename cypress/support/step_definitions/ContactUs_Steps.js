import {When, Then} from "@badeball/cypress-cucumber-preprocessor"
import ContactUs_Page from "../page_objects/ContactUs_Page"

When("I enter my firstname {string}",(firstname)=>{
    ContactUs_Page.enterFirstName(firstname)
})

When("I enter my lastname {string}",(lastname)=>{
    ContactUs_Page.enterLastName(lastname)
})

When("I enter my email {string}",(email)=>{
    ContactUs_Page.enterEmail(email)
})

When("I enter my comments {string}",(comment)=>{
    ContactUs_Page.enterComments(comment)
})

When("I click on Submit",()=>{
    ContactUs_Page.clickSubmit()
})


Then("I should get a Thank you message",()=>{
    ContactUs_Page.verifyThankyouText("Thank You for your Message!")
})

Then("Error message should be displayed",()=>{
    cy.get('body')
    ContactUs_Page.verifyErrorMessage("Error: Invalid email address")
})