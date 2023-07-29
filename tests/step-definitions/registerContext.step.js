const {Given, When, Then} = require('@cucumber/cucumber');

const RegisterPage = require("../pages/register-page")

let registerPage = new RegisterPage()

Given('I fill in the fields', async function () {
    await registerPage.visitRegisterPage()
    await registerPage.fillUser()
})

When ("I click on refresh", async function () {
    await registerPage.clickBtnRefresh()
})

Then("I stay on the same", async function () {
    await registerPage.stayOnSamePage()
})

Given ("I fill the form without name", async function () {
    await registerPage.visitRegisterPage()
    await registerPage.fillUserWithoutName()
})

When("I click on submit", async function () {
    await registerPage.clickBtnSubmit()
})

