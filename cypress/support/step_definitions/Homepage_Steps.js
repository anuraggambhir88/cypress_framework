import { Given, When} from "@badeball/cypress-cucumber-preprocessor"
///<reference types="cypress" />
import Base from "../page_objects/Base_Page"

const URL = "http://www.webdriveruniversity.com/"

Given("I navigate to WebdriverUniversity",()=>{
    Base.navigate()
})

When("I click on contact us link",()=>{
    cy.clickAndOpen("#contact-us")
})

When("I click on Login Portal",()=>{
    cy.get("#login-portal").invoke("removeAttr","target").click()
})











