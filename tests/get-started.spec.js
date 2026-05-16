const { test, expect } = require("@playwright/test")

async function openLoginPage(page) {
    await page.goto("/login")
    await expect(page.locator("h1.text-xl").filter({ hasText: "Sign in to EventHub" })).toBeVisible()
}

//Playwright actions return promises and await prevents timing issues and flaky behavior. Await will wait or freeze the async function till the promise is fulfilled or rejected. The function that uses await must be async function so the modified async should be specified before the function name. Using await and async make asynchronous code excute in synchronous way. As the browser automation involves sequential operations. 
test("EventHub login page loads", async ({ page }) => {
    await openLoginPage(page)
    await expect(page.getByPlaceholder("you@email.com")).toBeVisible()
    await expect(page.getByRole('button', { name: "Sign In" })).toBeVisible()
})

test("simple login-page test", async ({ page }) => {
    await openLoginPage(page)
    await expect(page.getByLabel("Password")).toBeVisible()
    const url = await page.url();
    // console.log(url)
    // console.log(url.includes("/login"))
    expect(url.includes("/login")).toBeTruthy()
    await expect(page.locator("h1.text-xl").filter({ hasText: "Sign in to EventHub" })).toBeVisible()
})