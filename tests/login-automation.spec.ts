import test from "@playwright/test";
import { AutomationPage } from "../src/pages/automation.page";
import { LoginAutomationPage } from "../src/pages/login-automation.page";

test.beforeEach(async ({ page }) => {
  const automationPage = new AutomationPage(page);
  await automationPage.goto();
  await automationPage.clickLoginAutomationUrl();

  const loginAutomationPage = new LoginAutomationPage(page);
  await loginAutomationPage.isLoaded();
});

test("Login fails with valid credentials but have not signed up and then click on Forgot Password", async ({
  page,
}) => {
  const loginAutomationPage = new LoginAutomationPage(page);
  await loginAutomationPage.fillMandatoryEmailAndPassword(
    "validUser@example.com",
    "validPassword123",
  );
  await loginAutomationPage.assertRememberMeCheckBoxShouldBeChecked();
  await loginAutomationPage.clickOnSignInButton();
  await loginAutomationPage.assertErrorMessageAfterClickingSignInButtonWithoutSignUp();

  await loginAutomationPage.clickOnForgotPassword();
  await loginAutomationPage.fillEmailAndClickOnSubmitButtonOfForgotPassword(
    "test@example.com",
  );
  await loginAutomationPage.successMessageAfterSubmittingPasswordRequest();
});

test("Login fails with invalid credentials", async ({ page }) => {
  const loginAutomationPage = new LoginAutomationPage(page);
  await loginAutomationPage.fillMandatoryEmailAndPassword(
    "invalidUser",
    "invalidPassword",
  );
  await loginAutomationPage.assertErrorMessageWithInvalidEmail();
  await loginAutomationPage.assertRememberMeCheckBoxShouldBeChecked();
  await loginAutomationPage.clickOnSignInButton();
  await loginAutomationPage.assertErrorMessageAfterClickingSignInButton();
});

test("Login success with valid credentials", async ({ page }) => {
  const loginAutomationPage = new LoginAutomationPage(page);
  await loginAutomationPage.fillMandatoryEmailAndPassword(
    "belle@example.com.vn",
    "1234567890",
  );
  await loginAutomationPage.assertRememberMeCheckBoxShouldBeChecked();
  await loginAutomationPage.clickOnSignInButton();
  await loginAutomationPage.isLoaded();
  await loginAutomationPage.welcomeBackMessageAfterSignInSuccessfully();
});
