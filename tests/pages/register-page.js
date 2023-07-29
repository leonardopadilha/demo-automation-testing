const BasePage = require("./base-page");
const { expect } = require('@playwright/test')
const { user } = require('../fixtures/person')


require('dotenv').config()
const REGISTER_URL = process.env.REGISTER_URL

const PASSWORD = process.env.PASSWORD

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

    async clickBtnRefresh() {
        await page.click(this.$$s.BTN_REFRESH)
    }

    async clickBtnSubmit() {
        await page.click(this.$$s.BTN_SUBMIT)
    }

    async selectSkills() {
        await page.selectOption(this.$$s.SKILLS, 'APIs')
    }

    async scroll() {
        await page.locator(this.$$s.BTN_REFRESH).scrollIntoViewIfNeeded()
    }

    async selectCountry() {
        await page.click(this.$$s.SELECT_COUNTRY)
        await page.type(this.$$s.INPUT_COUNTRY, 'Ne')
        await page.click(this.$$s.SELECT_NETHERLANDS)
    }

    async SelectDateBirth() {
        await page.selectOption(this.$$s.YEAR_OF_BIRTH, '1970')
        await page.selectOption(this.$$s.MONTH_OF_BIRTH, 'October')
        await page.selectOption(this.$$s.DAY_OF_BIRTH, '15')
    }

    async informPassword() {
        await page.type(this.$$s.PASSWORD, PASSWORD)
        await page.type(this.$$s.CONFIRM_PASSWORD, PASSWORD)
    }

    async stayOnSamePage() {
        return this.valiteTitle()
    }

    async getErrorMessage() {
        /* const element = await page.evaluate(
            () => document.querySelector('#section .form-group:first-child label').innerHTML
        ) */
    }

    async fillUser() {
        await this.fillFirstName()
        await this.fillLastName()
        await this.fillAddress()
        await this.fillEmailAddress()
        await this.fillPhone()
        await this.clickGender()
        await this.clickHobbie()

        await this.scroll()

        await this.selectSkills()
        await this.selectCountry()
        await this.SelectDateBirth()
        await this.informPassword()
    }

    async fillUserWithoutName() {
        await this.fillAddress()
        await this.fillEmailAddress()
        await this.fillPhone()
        await this.clickGender()
        await this.clickHobbie()

        await this.scroll()

        await this.selectSkills()
        await this.selectCountry()
        await this.SelectDateBirth()
        await this.informPassword()
    }
}