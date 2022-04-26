const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(/^I am on example website$/, async () => {
    await browser.url(`https://example.com`)
})

When(/^I wait 3 seconds$/, async () => {
    await browser.pause(3000)
})

Then(/^I see title element$/, async () => {
    //await expect(browser).toHaveTitle("Example Domain")
    await expect($('h1')).toBeExisting()
    await expect($('h1')).toHaveTextContaining("Example Domain")
})

//"defineStep" Para llamar los pasos en cualquier momento o parte

/*const { defineStep } = require('@wdio/cucumber-framework');

defineStep(/^I am on example website$/, async () => {
    await browser.url(`https://example.com`)
})

defineStep(/^I wait 3 seconds$/, async () => {
    await browser.pause(3000)
})

defineStep(/^I see title element$/, async () => {
    //await expect(browser).toHaveTitle("Example Domain")
    await expect($('h1')).toBeExisting()
    await expect($('h1')).toHaveTextContaining("Example Domain")
})*/