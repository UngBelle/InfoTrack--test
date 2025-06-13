import { expect, Locator, Page } from "@playwright/test";
import { PageBase } from "./_base";

export class AutomationAssessmentPage extends PageBase {
  readonly PATH = "/fake-pricing-page";
  readonly TIMEOUT_SECONDS = 10;
  readonly PAGE_READY_ELEMENT: Locator;

  // Header button
  readonly discoverySessionHeaderButton: Locator;

  // Title
  readonly assessmentTitle: Locator;

  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly roleInput: Locator;
  readonly companyName: Locator;
  readonly QALevelEvaluationDropdown: Locator;
  readonly QALevelEvaluationDropdownOption: Locator;
  readonly messageInput: Locator;
  readonly notARobotCheckBox: Locator;
  readonly submitButton: Locator;

  readonly successMessage: Locator;

  constructor(page: Page) {
    super(page);

    // Header button
    this.discoverySessionHeaderButton = page.locator("#menu-item-217945");
    this.assessmentTitle = page.getByText(
      "Push Higher Quality Software To Market Faster!",
    );

    // Fill mandatory fields
    this.nameInput = page.locator('//input[(@id="cu-form-control-0")]');
    this.emailInput = page.getByPlaceholder("Enter email");
    this.roleInput = page.locator('//input[(@id="cu-form-control-2")]');
    this.companyName = page.locator('//input[(@id="cu-form-control-3")]');
    this.QALevelEvaluationDropdown = page.locator(
      '//div[contains(@class,"selection__toggle")]',
    );
    this.QALevelEvaluationDropdownOption = page.getByText(
      " Build an automation program from scratch",
    );
    this.messageInput = page.getByPlaceholder(
      "Please include all information you consider relevant to the evaluation.",
    );
    this.notARobotCheckBox = page
      .frameLocator('iframe[title="reCAPTCHA"]')
      .locator("#recaptcha-anchor");

    this.submitButton = page.getByRole("button", {
      name: "Submit",
    });

    this.successMessage = page.getByText("Thank You!");
    this.PAGE_READY_ELEMENT = this.assessmentTitle;
  }

  async clickOnDiscoverySessionButton() {
    await this.discoverySessionHeaderButton.click();
  }

  async fillMandatoryFields(
    name: string,
    email: string,
    role: string,
    company: string,
  ) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.roleInput.fill(role);
    await this.companyName.fill(company);
  }

  async selectLevelForUltimateQAEvaluateYourSkill() {
    await this.QALevelEvaluationDropdown.click();
    await this.QALevelEvaluationDropdownOption.click();
  }

  async fillMessage(message: string) {
    await this.messageInput.fill(message);
  }

  async clickOnNotARobotCapcha() {
    await this.notARobotCheckBox.waitFor({ state: "visible", timeout: 10000 });
    await this.notARobotCheckBox.click();
  }

  async clickOnSubmitButton() {
    await this.submitButton.click();
  }

  async assertTheFormIsSuccessfullySubmitted() {
    await expect(this.successMessage).toBeVisible();
  }
}
