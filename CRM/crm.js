const { Builder, By, Key, util } = require("selenium-webdriver");

async function coba() {
    let driver = await new Builder().forBrowser("firefox").build();
    let assert = require("assert");

    try {
        await driver.get("https://demo.1crmcloud.com/login.php");
        await driver.findElement(By.id("login_user")).sendKeys("admin");
        await driver.findElement(By.id("login_pass")).sendKeys("admin");
        await driver.findElement(By.id("login_button")).click();
        await driver.sleep(6000);
        await driver.findElement(By.className("default-avatar")).click();

        const text = await driver.findElement(By.xpath("/html/body/div[7]/div/div[3]/div/form/div[2]/div/div/div[2]/div/div[1]/div[1]/h3")).getText();
        assert.equal(text, "Administrator", "Test Failed");
        console.log("Test Success");
    }
    catch (error) {
        console.log("Test Failed");
    }
}

coba();