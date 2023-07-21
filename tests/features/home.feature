#language: en

@emailForm
Feature: Access the index page

    As a user
    I want to inform my email

    @fillEmail
    Scenario Outline: Fill email
        Given I visit a home page
        When I fill the email form with "<email>"
        Then I'm redirected to the registration page

            Examples:
            | email                 | 
            | teste@teste.com.br    |
    
    @emptyEmail
    Scenario: Empty email
        Given I visit a home
        When I don't inform the email 
        Then I'm redirected to the registration page with success