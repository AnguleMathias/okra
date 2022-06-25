import puppeteer from "puppeteer";

const randomInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const sleepFor = async (page: puppeteer.Page, min: number, max: number) => {
  const sleepTime = randomInterval(min, max);

  // simulate human behaviour
  await page.waitForTimeout(sleepTime);
};

export default sleepFor;
