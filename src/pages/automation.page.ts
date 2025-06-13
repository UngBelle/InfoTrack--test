import { Locator, Page } from "@playwright/test";
import { PageBase } from "./_base";

export class AutomationPage extends PageBase {
  readonly PATH = "/automation";
  readonly TIMEOUT_SECONDS = 20;
  readonly PAGE_READY_ELEMENT: Locator;

  // URLs
  bigPageUrl: Locator;
  fakeLandingPageUrl: Locator;
  fakePricingPageUrl: Locator;
  fillOutFormsUrl: Locator;
  learnHowToAutomateUrl: Locator;
  loginAutomationUrl: Locator;
  interactionsUrl: Locator;

  // Footers
  freeCourses: Locator;

  constructor(page: Page) {
    super(page);

    // URLs (Pages)
    this.bigPageUrl = page.getByText("Big page with many elements");
    this.fakeLandingPageUrl = page.getByText("Fake Landing Page");
    this.fakePricingPageUrl = page.getByText("Fake Pricing Page");
    this.fillOutFormsUrl = page.getByText("Fill out forms");
    this.learnHowToAutomateUrl = page.getByText(
      "Learn how to automate an application that evolves over time",
    );
    this.loginAutomationUrl = page.getByText("Login automation");
    this.interactionsUrl = page.getByText("Interactions with simple elements");

    // Footer URLs
    this.freeCourses = page.getByRole("link", { name: "Free Courses" });

    this.PAGE_READY_ELEMENT = this.bigPageUrl;
  }

  // URLs
  async clickBigPageUrl() {
    await this.bigPageUrl.click();
  }

  async clickFakeLandingPageUrl() {
    await this.fakeLandingPageUrl.click();
  }

  async clickFakePricingPageUrl() {
    await this.fakePricingPageUrl.click();
  }

  async clickFillOutFormsUrl() {
    await this.fillOutFormsUrl.click();
  }

  async clickLearnHowToAutomateUrl() {
    await this.learnHowToAutomateUrl.click();
  }

  async clickLoginAutomationUrl() {
    await this.loginAutomationUrl.click();
  }

  async clickInteractionsUrl() {
    await this.interactionsUrl.click();
  }

  async clickFreeCourses() {
    await this.freeCourses.click();
  }
}
