const timeout = 10000;

describe('sample e2e test', () => {
  let page
  beforeAll(async () => {
    page = await global.__BROWSER__.newPage();
  }, timeout);

  afterAll(async () => {
    await page.close()
  });

  it('button test', async () => {
    await page.goto('http://localhost:3000/e2e-test', {
      timeout: 3000,
      waitUntil: ['networkidle0'],
    }); 
    await page.$eval('button#e2e-test', (form) => form.click());
  });
}, timeout)