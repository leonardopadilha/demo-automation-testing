#language: en

@registrationForm
Feature: Registration

    As a user
    I want to inform my data

    @clearForm
    Scenario: Clear registration form
        Given I fill in the fields
        When I click on refresh
        Then I stay on the same 
        

    @formWithouName
    Scenario: form without name
        Given I fill the form without name
        When I click on submit
        Then I stay on the same




       