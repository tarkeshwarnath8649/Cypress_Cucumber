Feature: My First Feature

    This is my first feature file
    Background: Steps to run before every scenario
        Given This step will run before every scenario

    Scenario: My first scenario
        Given I launch the application1
        When I enter the username "Vevek"
        And I enter the password "Newuser"
        And I click on login button
        Then I should be succesfully logged in
        And I should be on the Home Page

    Scenario: My second scenario
        Given This is my second test case