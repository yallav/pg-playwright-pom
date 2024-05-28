const { expect } = require('@playwright/test');

exports.OrdersPage = class OrdersPage {
  constructor(page) {
    this.page = page;
  }

  async openOrdersDashboard() {
    expect(await this.page.locator('//*[text()="Orders"]')).toBeVisible();
    await this.page.locator('//*[text()="Orders"]').click();
  }
};
