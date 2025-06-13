import { expect, Locator, Page } from "@playwright/test";
import { PageBase } from "./_base";

export class FillOutFormsPage extends PageBase {
  readonly PATH = "/filling-out-forms";
  readonly TIMEOUT_SECONDS = 10;
  readonly PAGE_READY_ELEMENT: Locator;

  readonly secondSubmitButton: Locator;

  readonly firstName: Locator;
  readonly firstMessage: Locator;
  readonly firstSubmitButton: Locator;

  readonly confirmMessage: Locator;
  readonly errorMessageBlankFields: Locator;
  readonly errorMessageOneBlankFields: Locator;

  constructor(page: Page) {
    super(page);

    this.secondSubmitButton = page
      .getByRole("button", { name: "Submit" })
      .last();

    this.firstName = page.getByPlaceholder("Name").first();
    this.firstMessage = page.locator("#et_pb_contact_message_0");
    this.firstSubmitButton = page
      .getByRole("button", { name: "Submit" })
      .first();

    this.confirmMessage = page.getByText("Thanks for contacting us");
    this.errorMessageBlankFields = page.getByText(
      "Please, fill in the following fields:",
    );
    this.errorMessageOneBlankFields = page.getByText(
      "Make sure you fill in all required fields.",
    );
    this.PAGE_READY_ELEMENT = this.secondSubmitButton;
  }

  async fillFirstNameAndMessage(name: string, message: string) {
    await this.firstName.fill(name);
    await this.firstMessage.fill(message);
  }

  async clickOnFirstSubmitButton() {
    await this.firstSubmitButton.click();
  }

  async waitForThankYouMessageLoaded() {
    await this.page.waitForSelector(
      "(//div[@class='et-pb-contact-message'])[1]",
      { timeout: 20000 },
    );
  }

  async assertConfirmMessageDisplayedAfterClickingSubmitButton() {
    await expect(this.confirmMessage).toHaveText("Thanks for contacting us");
  }

  async assertErrorMessageDisplayedWhenLeavingFieldsBlank() {
    await expect(this.errorMessageBlankFields).toBeVisible();
  }

  async assertErrorMessageDisplayedWhenFillingOneField() {
    await expect(this.errorMessageOneBlankFields).toBeVisible();
  }
}
