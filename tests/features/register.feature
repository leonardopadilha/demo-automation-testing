#language: en

@registrationForm
Feature: Registration

    As a user
    I want to inform my data

    @clearForm
    Scenario: Clear registration form
        Given I fill in the fields
        When I click on refresh
        Then Then I stay on the same page

    
        #Examples:
        #"<firstName>", "<lastName>", "<address>", "<emailAddress>", "<phone>", "<gender>", "<hobbies>", "<languages>", "<skills>", "<selectCountry>", "<yearOfBirth>", "<monthOfBirth>", "<dateOfBirth>", "<password>", "<confirmPassword>"
        #|firstName  |lastName   |address    |emailAddress       |phone          |gender |hobbies    |languages  |skills |selectCountry  |yearOfBirth    |monthOfBirth  |dateOfBith      |password   |confirmPassword    |
        #|Nelson     |Eduardo    |rua teste  |teste@teste.com    |99999999999    |m      |Cricket    |english    |APIs   |New zealand    |1963           |December      |21              |xpto       |xpto               |




       