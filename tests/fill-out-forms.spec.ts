import test from "@playwright/test";
import { AutomationPage } from "../src/pages/automation.page";
import { FillOutFormsPage } from "../src/pages/fill-out-forms.page";

test.beforeEach(async ({ page }) => {
  const automationPage = new AutomationPage(page);
  await automationPage.goto();
  await automationPage.clickFillOutFormsUrl();
});

test("Submit successfully with name and message", async ({ page }) => {
  const fillOutForms = new FillOutFormsPage(page);
  await fillOutForms.isLoaded();
  await fillOutForms.fillFirstNameAndMessage("Belle", "Hello World!");
  await fillOutForms.clickOnFirstSubmitButton();
  await fillOutForms.waitForThankYouMessageLoaded();
  await fillOutForms.assertConfirmMessageDisplayedAfterClickingSubmitButton();
});

test("Submit with BOTH empty fields and receive error message", async ({
  page,
}) => {
  const fillOutForms = new FillOutFormsPage(page);
  await fillOutForms.isLoaded();
  await fillOutForms.clickOnFirstSubmitButton();
  await fillOutForms.assertErrorMessageDisplayedWhenLeavingFieldsBlank();
});

test("Submit with ONE empty field and receive error message", async ({
  page,
}) => {
  const fillOutForms = new FillOutFormsPage(page);
  await fillOutForms.fillFirstNameAndMessage("Belle", " ");
  await fillOutForms.clickOnFirstSubmitButton();
  await fillOutForms.assertErrorMessageDisplayedWhenFillingOneField();
});
