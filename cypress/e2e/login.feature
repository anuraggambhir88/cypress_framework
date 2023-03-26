@regression
Feature: Validate Login
    Background: Common Login
        When I wait for 10 seconds
        When I navigate to WebdriverUniversity
        And I click on Login Portal
        And I enter my username '<username>'

    Scenario Outline: Validate login and unscuccessful login
        And I enter my password '<password>'
        Then I should get '<textvalidation>'

        Examples:
            | username  | password     | textvalidation     |
            | webdriver | webdriver123 | login aasuccessfull   |
            | webdriver | webdriver1   | login unsuccessful |