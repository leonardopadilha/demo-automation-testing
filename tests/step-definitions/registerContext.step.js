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

Then("Then I stay on the same page", async function () {
    await registerPage.stayOnSamePage()
})

