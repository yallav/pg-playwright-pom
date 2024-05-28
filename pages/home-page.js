const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
  }

  async launchHomePage(url) {
    await this.page.goto(url);
    expect(await this.page.title()).toEqual('Posters Galore Administration');
  }

  async login(username, password) {
    expect(await this.page.locator("//*[@name='username']")).toBeVisible();
    await this.page.locator("//*[@name='username']").clear();
    await this.page.locator("//*[@name='username']").fill(username);

    expect(await this.page.locator("//*[@name='password']")).toBeVisible();
    await this.page.locator("//*[@name='password']").clear();
    await this.page.locator("//*[@name='password']").fill(password);

    expect(
      await this.page.locator("//*[@type='submit' and text()='Sign in']")
    ).toBeVisible();

    expect(
      await this.page.locator("//*[@type='submit' and text()='Sign in']")
    ).toBeEnabled();

    await this.page.locator("//*[@type='submit' and text()='Sign in']").click();
  }
};
