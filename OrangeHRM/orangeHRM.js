const { Builder, By, Key, util } = require("selenium-webdriver");

async function coba() {
    let driver = await new Builder().forBrowser("firefox").build();
    let assert = require("assert");

    try {
        await driver.get("https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login");
        await driver.findElement(By.id("txtUsername")).sendKeys("opensourcecms");
        await driver.findElement(By.id("txtPassword")).sendKeys("opensourcecms");
        await driver.findElement(By.id("btnLogin")).click();
        const text = await driver.findElement(By.xpath("//li")).getText();
        assert.equal(text, "Welcome Admin", "Test Failed");
        console.log("Test Success");
    }
    catch (error) {
        console.log("Test Failed");
    }
}
    
coba();