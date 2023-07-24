const {Given, When, Then} = require('@cucumber/cucumber');

const RegisterPage = require("../pages/register-page")

let registerPage = new RegisterPage()

Given('I fill in the fields {string}, {string}', async function (firstName, lastName) {
    await registerPage.visitRegisterPage()
    await registerPage.fillFirstName(firstName)
    await registerPage.fillLastName(lastName)
})

When ("I click on refresh", async function () {

})

Then("the form is cleared successfully", async function () {

})

