Feature: My First Feature

    This is my first feature file

    Scenario: My first scenario
        Given I launch the application
        When I enter the username
        And I enter the password
        And I click on login button
        Then I should be succesfully logged in
        And I should be on the Home Page