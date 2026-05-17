const {Page,expect}=require("@playwright/test")

async function openLoginPage(page) {
    await page.goto("/login")
   //await expect(page.locator("h1.text-xl").filter({ hasText: "Sign in to EventHub" })).toBeVisible()
   await expect(page.locator('h1:has-text("Sign in to EventHub")')).toBeVisible()
}
module.exports={openLoginPage}