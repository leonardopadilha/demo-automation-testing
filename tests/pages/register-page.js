const BasePage = require("./base-page");
const { expect } = require('@playwright/test')
const { user } = require('../fixtures/person')


require('dotenv').config()
const REGISTER_URL = process.env.REGISTER_URL

module.exports = class RegisterPage extends BasePage {

    $$s = this.$s.registerSelectors

    async visitRegisterPage() {
        await page.goto(`${REGISTER_URL}`)
    }

    async valiteTitle() {
        const title = await page.locator(this.$$s.REGISTER_TITLE).textContent()
        await expect(title).toEqual('Register');
    }

    async fillFirstName() {
        //await page.waitForSelector(this.$$s.FIRST_NAME)
        await page.fill(this.$$s.FIRST_NAME, user.FIRST_NAME)
    }

    async fillLastName() {
        //await page.waitForSelector(this.$$s.LAST_NAME)
        await page.fill(this.$$s.LAST_NAME, user.LAST_NAME)
        // await page.getByPlaceholder(this.$$s.LAST_NAME).fill(lastName)
    }

    async fillAddress() {
        await page.type(this.$$s.ADDRESS, user.ADDRESS)
    }

    async fillEmailAddress() {
        await page.type(this.$$s.EMAIL_ADDRESS, user.EMAIL)
    }

    async fillPhone() {
        await page.type(this.$$s.PHONE, user.PHONE)
    }

    async clickGender() {
        await page.click(this.$$s.GENDER_MALE)
    }

    async clickHobbie() {
        for (let i = 1 ; i <= 3; i++) {
            await page.click(`${this.$$s.HOBBIES}${i}`)
        }
    }

    async fillUser() {
        await this.fillFirstName()
        await this.fillLastName()
        await this.fillAddress()
        await this.fillEmailAddress()
        await this.fillPhone()
        await this.clickGender()
        await this.clickHobbie()
    }
}