const { expect } = require('@playwright/test');
const { getRandomIndex } = require('../utilities/helper');

exports.OrderDetailsPage = class OrderDetailsPage {
  constructor(page) {
    this.page = page;
  }

  async openOrderSummary() {
    expect(
      await this.page.locator("//*[contains(@class,'RaDatagrid-root')]")
    ).toBeVisible();

    const table = this.page.locator("//*[contains(@class,'RaDatagrid-root')]");

    expect(await table.locator('//tr')).not.toHaveCount(0);
    const numOfOrders = await table.locator('//tr').count();
    const randomIdx = getRandomIndex(0, numOfOrders);
    await table.locator('//tr').locator(`nth=${randomIdx}`).click();
  }

  async validateOrderSummary() {
    expect(await this.page.title()).toEqual('Posters Galore Administration');
    expect(await this.page.locator("//*[text()='Reference']")).toBeVisible();
    expect(
      await this.page.locator("//table[contains(@class,'MuiTable-root')]")
    ).toBeVisible();
  }
};
