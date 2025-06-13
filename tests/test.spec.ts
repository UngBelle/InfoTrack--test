import { test } from "@playwright/test";
import { AutomationPage } from "../src/pages/automation.page";
import { ComplicatedPage } from "../src/pages/complicated.page";
import { FakeLandingPage } from "../src/pages/fake-landing.page";
import { FakePricingPage } from "../src/pages/fake-pricing.page";
import { FillOutFormsPage } from "../src/pages/fill-out-forms.page";
import { LearnHowToAutomatePage } from "../src/pages/learn-automate.page";
import { LoginAutomationPage } from "../src/pages/login-automation.page";
import { InteractionsPage } from "../src/pages/interactions.page";
import { AutomationAssessmentPage } from "../src/pages/automation-assessment.page";

test("Navigation Links Redirect Correctly", async ({ page }) => {
  const automationPage = new AutomationPage(page);
  await automationPage.goto();
  await automationPage.clickBigPageUrl();

  const complicatedPage = new ComplicatedPage(page);
  await complicatedPage.isLoaded();

  page.goBack();

  await automationPage.clickFakeLandingPageUrl();
  const fakeLandingPage = new FakeLandingPage(page);
  await fakeLandingPage.isLoaded();

  page.goBack();

  await automationPage.clickFakePricingPageUrl();
  const fakePricingPage = new FakePricingPage(page);
  await fakePricingPage.isLoaded();

  page.goBack();

  await automationPage.clickFillOutFormsUrl();
  const fillOutFormsPage = new FillOutFormsPage(page);
  await fillOutFormsPage.isLoaded();

  page.goBack();

  await automationPage.clickLearnHowToAutomateUrl();
  const learn = new LearnHowToAutomatePage(page);
  await learn.isLoaded();

  page.goBack();

  await automationPage.clickLoginAutomationUrl();
  const loginAutomation = new LoginAutomationPage(page);
  await loginAutomation.isLoaded();

  page.goBack();

  await automationPage.clickInteractionsUrl();
  const interactions = new InteractionsPage(page);
  await interactions.isLoaded();

  page.goBack();
});

test("Ensure “I Want a Free Discovery Session” button redirects correctly", async ({
  page,
}) => {
  const automationPage = new AutomationPage(page);
  await automationPage.goto();
  await automationPage.isLoaded();

  const assessment = new AutomationAssessmentPage(page);
  await assessment.clickOnDiscoverySessionButton();
  await assessment.isLoaded();

  await assessment.fillMandatoryFields(
    "belle",
    "belleung23@example.com",
    "Quality Assurance Engineer",
    "CBTW",
  );

  await assessment.selectLevelForUltimateQAEvaluateYourSkill();
  await assessment.fillMessage("Hi! It's my pleasure");
  // This page have the captcha, I tried to mock it but it did not work so this step will be failed
  await assessment.clickOnSubmitButton();
  await assessment.assertTheFormIsSuccessfullySubmitted();
});
