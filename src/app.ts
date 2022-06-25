import puppeteer from "puppeteer";
import { config } from "dotenv";

import authenticate from "./utils/authenticate";
import sleepFor from "./utils/sleepFor";

config();

const mainApp = async () => {
  try {
    // create a new browser instance
    const browser = await puppeteer.launch({ headless: false });

    // create a new page instance
    const page = await browser.newPage();
    const URL = process.env.OKRA_URL || "";
    await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1 });

    // navigate to okra login page
    await page.goto(URL, { waitUntil: "networkidle2" });
    await sleepFor(page, 1000, 2000);

    // login to okra
    await authenticate(page);

    // close browser
    // await browser.close();
  } catch (err) {
    console.log(err);
  }
};

const main = async () => {
  await mainApp();
};

main();
