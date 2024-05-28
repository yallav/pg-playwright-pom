const { test } = require('@playwright/test');
const { HomePage } = require('../pages/home-page');
const { OrdersPage } = require('../pages/orders-page');
const { OrderDetailsPage } = require('../pages/order-details-page');
require('dotenv').config();

let homePage = null;
let orderPage = null;
let orderDetailsPage = null;
let applicationUrl = '';

test.beforeEach('Before each test', ({ page }) => {
  applicationUrl = process.env.URL;
  homePage = new HomePage(page);
  orderPage = new OrdersPage(page);
  orderDetailsPage = new OrderDetailsPage(page);
});

test('Open order summary on random basis', async () => {
  await homePage.launchHomePage(applicationUrl);
  await homePage.login(process.env.USER_NAME, process.env.PASSWORD);
  await orderPage.openOrdersDashboard();
  await orderDetailsPage.openOrderSummary();
  await orderDetailsPage.validateOrderSummary();
});
