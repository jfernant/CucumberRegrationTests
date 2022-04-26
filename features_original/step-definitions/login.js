const { Given, When, Then } = require('@wdio/cucumber-framework')

Given(/^I am on the (\w+) page$/, async () => {
    await browser.url(`https://sumadi-test.blackboard.com/`);
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await $('#user_id').setValue(username);
    await $('#password').setValue(password);
    await $('button[type="submit"]').click();
});

/*Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect($('#flash')).toBeExisting();
    await expect($('#flash')).toHaveTextContaining(message);
});*/