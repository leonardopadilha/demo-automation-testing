const BasePage = require("./base-page");

require('dotenv').config()
const BASE_URL = process.env.BASE_URL

module.exports = class IndexPage extends BasePage {

    $$s = this.$s.indexSelectors

    async visit() {
        await page.goto(`${BASE_URL}`)
    }

    async fillEmail(email) {
        await page.waitForSelector(this.$$s.EMAIL_ID_FOR_SIGN_UP)
        await page.fill(this.$$s.EMAIL_ID_FOR_SIGN_UP, email)
    }

    async clickButtonSignUp() {
        await page.click(this.$$s.BOTTON_ENTER)
    }
    
}