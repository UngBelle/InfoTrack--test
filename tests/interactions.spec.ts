import test from "@playwright/test";
import { AutomationPage } from "../src/pages/automation.page";
import { InteractionsPage } from "../src/pages/interactions.page";

test("Buttons in Interactions Page are clicked successfully", async ({
  page,
}) => {
  const automationPage = new AutomationPage(page);
  await automationPage.goto();
  await automationPage.clickInteractionsUrl();
  const interactions = new InteractionsPage(page);
  await interactions.isLoaded();

  await interactions.clickOnUsingIdButton();
  await interactions.assertSuccessMessageDisplayedAfterClickingButton(
    "Button success",
  );

  await page.goBack();

  await interactions.clickOnClickMeButton();
  await interactions.assertSuccessMessageDisplayedAfterClickingButton(
    "Button success",
  );

  await page.goBack();

  await interactions.getQATitle("Quality Assurance Engineer");
});
