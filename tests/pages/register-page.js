const BasePage = require("./base-page");
const {expect} = require('@playwright/test')

module.exports = class RegisterPage extends BasePage {

    $$s = this.$s.registerSelectors

    async valiteTitle() {
        const title = await page.locator(this.$$s.REGISTER_TITLE).textContent()
        await expect(title).toEqual('Register');
    }
}