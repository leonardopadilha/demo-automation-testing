#language: en

@registrationForm
Feature: Registration

    As a user
    I want to inform my data

    @clearForm
    Scenario Outline: Clear registration form
        Given I fill in the fields "<firstName>", "<lastName>"
        When I click on refresh
        Then the form is cleared successfully

        Examples:
        |firstName  |lastName   |
        |Nelson     |Eduardo    |

        #Examples:
        #"<firstName>", "<lastName>", "<address>", "<emailAddress>", "<phone>", "<gender>", "<hobbies>", "<languages>", "<skills>", "<selectCountry>", "<yearOfBirth>", "<monthOfBirth>", "<dateOfBirth>", "<password>", "<confirmPassword>"
        #|firstName  |lastName   |address    |emailAddress       |phone          |gender |hobbies    |languages  |skills |selectCountry  |yearOfBirth    |monthOfBirth  |dateOfBith      |password   |confirmPassword    |
        #|Nelson     |Eduardo    |rua teste  |teste@teste.com    |99999999999    |m      |Cricket    |english    |APIs   |New zealand    |1963           |December      |21              |xpto       |xpto               |




       