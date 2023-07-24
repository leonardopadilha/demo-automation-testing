const BasePage = require("./base-page");
const {expect} = require('@playwright/test')

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

    async fillFirstName(firstName) {
        //await page.waitForSelector(this.$$s.FIRST_NAME)
        await page.fill(this.$$s.FIRST_NAME, firstName)
    }

    async fillLastName(lastName) {
        //await page.waitForSelector(this.$$s.LAST_NAME)
        await page.fill(this.$$s.LAST_NAME, lastName)
        // await page.getByPlaceholder(this.$$s.LAST_NAME).fill(lastName)
    }
}