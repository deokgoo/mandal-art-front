import puppeteer from 'puppeteer';
// puppeteer을 가져온다.
const test = async () => {
  // headless모드를 끌 수 있다.
  const browser = await puppeteer.launch({
    headless: false
  });

  // 새로운 페이지를 연다.
  const page = await browser.newPage();
  // 페이지의 크기를 설정한다.
  await page.setViewport({
    width: 1366,
    height: 768
  });

  await page.goto('http://localhost:3000/e2e-test');
  await page.$eval('button#e2e-test', (form: any) => form.click());
  // 10초 뒤 종료
  await page.waitForTimeout(10000);
  await page.close();
  await browser.close();
};

test();