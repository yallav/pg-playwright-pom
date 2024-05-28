## Playwright with POM (Page Object Model)
This project demonstrates the Playwright automation test scripts with POM design pattern in JavaScript

POM Reference - https://playwright.dev/docs/pom
Prerequisites - NodeJS, NPM and VSCode editor (my choice)

### Playwright Setup
1. Initialize Playwright by executing - npm init playwright@latest
2. Install dotenv dependency to read environment variables

### Tweaks in playwright.config.js file
Some of the configuration can be changed as per our needs. Following are changed to embed traces, screenshots and video in the Playwright HTML report.
```
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    video: 'on',
    screenshot: 'on',
  },
```


### Test Execution
- Execute the test in headless mode by running the following command from project root directory in the console
```
npx playwright test
```
- Execute the tests in UI mode by running tests in UI mode 
```
npx playwright test --ui
```
We can observe the follwing page in response to UI mode, where we can watch for changes in spec file as well. This feature detects the changes in spec file and execute the test automatically for each save operation.

![alt text](/documentation/image-3.png)

### Challenges
1. Test is failing with the following error
![alt text](/documentation/image.png)

solution [found at](https://github.com/microsoft/playwright/issues/19100)
```
execute the command - sudo npx playwright install-deps
```
2. Playwright is having issues to launch tests in headless mode on Ubuntu machine, follwing error may occur
![alt text](/documentation/image-2.png)
solution - 
execute the tests in UI mode by running tests in UI mode
