import puppeteer from "puppeteer";

const authenticate = async (page: puppeteer.Page) => {
  // $x('//input[@id="email"]') -- $x('//input[@id="password"]')
  try {
    const email = await page.$x('//input[@id="email"]');
    if (email.length > 0) {
      await email[0].focus();
      await page.keyboard.type(process.env.OKRA_EMAIL || "");
    }

    const password = await page.$x('//input[@id="password"]');
    if (password.length > 0) {
      await password[0].focus();
      await page.keyboard.type(process.env.OKRA_PASSWORD || "");
    }

    const loginButton = await page.$x('//button[@type="submit"]');
    if (loginButton.length > 0) {
      console.log("clicking login button");
      await loginButton[0].click();
    }

    // await page.type("#email", process.env.OKRA_USERNAME || "", { delay: 100 });
    // await page.type("#password", process.env.OKRA_PASSWORD || "", {
    //   delay: 100,
    // });
    // await page.click("#login-button");
    // await page.waitForNavigation({ waitUntil: "networkidle2" });
  } catch (e) {
    console.log("Login error: ", e);
  }
};

export default authenticate;
