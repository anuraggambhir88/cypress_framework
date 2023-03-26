@regression
Feature: Contact Us - WebdriverUniversity
    @smoke
    Scenario: Submitting valid contact us form
    Given I navigate to WebdriverUniversity
    When I click on contact us link
    And I enter my firstname "Anurag"
    And I enter my lastname "Gambhir"
    And I enter my email "test@test.com"
    And I enter my comments "My House address"
    And I click on Submit
    Then I should get a Thank you message

    Scenario: Submitting invalid contact us form
    Given I navigate to WebdriverUniversity
    When I click on contact us link
    And I enter my firstname "Anurag"
    And I enter my lastname "Gambhir"
    And I enter my comments "My House address"
    And I click on Submit
    Then Error message should be displayed
