import { expect, Locator, Page } from "@playwright/test";
import { PageBase } from "./_base";

export class CompleteSignUpPage extends PageBase {
  readonly PATH = "/account/complete_signup";
  readonly TIMEOUT_SECONDS: 30;
  readonly PAGE_READY_ELEMENT: Locator;

  readonly newPassword: Locator;
  readonly nextButton: Locator;
  readonly successfulLogo: Locator;

  constructor(page: Page) {
    super(page);

    this.newPassword = page.getByPlaceholder("New password");
    this.nextButton = page.locator('//input[@type="submit"]');
    this.successfulLogo = page.locator(
      '//img[contains(@alt,"UltimateQA")])[1]',
    );
    this.PAGE_READY_ELEMENT = this.nextButton;
  }

  async fillPasswordAndClickOnNextButton(value: string) {
    await this.newPassword.fill(value);
    await this.nextButton.click({ force: true });
  }

  async assertSuccessfulLogoDisplayedAfterCompletingSignUp() {
    await expect(this.successfulLogo).toBeVisible();
  }
}
