const {Given, When, Then} = require('@cucumber/cucumber');
const {expect } = require('@playwright/test')

const HomePage = require("../pages/home-page")
const RegisterPage = require("../pages/register-page")

let homePage = new HomePage()
let registerPage = new RegisterPage()

Given("I visit a home page", async function() {
    await homePage.visit()
})

When('I fill the email form with {string}', async function(email) {
    await homePage.fillEmail(email)
    await homePage.clickButtonSignUp()
})

Then ("I'm redirected to the registration page", async function () {
    await registerPage.valiteTitle()
})

Given("I visit a home", async function () {
    await homePage.visit()
})

When("I don't inform the email", async function () {
    await homePage.clickButtonSignUp()
})

Then ("I'm redirected to the registration page with success", async function () {
    await registerPage.valiteTitle()
})
