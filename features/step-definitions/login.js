const { Given, When, Then } = require('@wdio/cucumber-framework')

Given(/^I am on the login page and click ok button$/, async () => {
    await browser.url(`https://sumadi-test.blackboard.com/`)
    await browser.setWindowSize(1650, 1050)
    await expect($('#agree_button')).toExist()
    await $('#agree_button').click()
    await browser.pause(3000)
})

When(/^I login with credentials$/, async () => {
    await $('#user_id').setValue('laur.jtinoco')
    await $('#password').setValue('Laureate123')
    await $('#entry-login').click()
})

Then(/^I should see a Stream title$/, async () => {
    await expect($('h1')).toBeExisting()
    await expect($('h1')).toHaveTextContaining('Stream')
    await browser.pause(3000)
})

When(/^I click on course$/, async () => {
    await $('#activity-stream > div > ul > li:nth-child(2) > div > div > div > div > div.context.ellipsis > a').click()
})

Then(/^I should see a Course Content Title$/, async () => {
    //await expect($('h2')).toBeExisting()
    //await expect($('h2')).toHaveTextContaining('Course Content')
    await browser.pause(3000)
})

When(/^click on test course$/, async () => {
    await $('#fileUploadDiv-2944-4839 > div.fileUploadTransclude > div > div > div > div > div:nth-child(1) > ng-switch > div > div > div > div > bb-content-item-base > div > div > div > div > div > div.content-item-details > div > ng-switch > div > div.element-details > div:nth-child(1) > bb-content-item-course-outline > div > div.name > ng-switch > div > bb-content-item-ltilaunch > a > span').click()
    await browser.pause(3000)
})