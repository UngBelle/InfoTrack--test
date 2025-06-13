import { expect, Locator, Page } from "@playwright/test";
import { PageBase } from "./_base";

export class InteractionsPage extends PageBase {
  readonly PATH: "/simple-html-elements-for-automation";
  readonly TIMEOUT_SECONDS: 5;
  readonly PAGE_READY_ELEMENT: Locator;

  readonly usingIdButton: Locator;
  readonly clickMeButton: Locator;
  readonly noIdQAEngineer: Locator;

  readonly successMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.usingIdButton = page.getByText('Click this button using "ID"');
    this.clickMeButton = page
      .locator('//a[contains(@class,"et_pb_promo_button")]')
      .getByText("Click Me");
    this.noIdQAEngineer = page
      .locator("table td", {
        hasText: "Quality Assurance Engineer",
      })
      .last();

    this.successMessage = page.getByText("Button success");
    this.PAGE_READY_ELEMENT = this.usingIdButton;
  }

  async clickOnUsingIdButton() {
    await this.usingIdButton.click();
  }

  async clickOnClickMeButton() {
    await this.clickMeButton.click();
  }

  async assertSuccessMessageDisplayedAfterClickingButton(text: string) {
    await expect(this.successMessage).toBeVisible();
    await expect(this.successMessage).toHaveText(text);
  }

  async getQATitle(title: string) {
    await expect(this.noIdQAEngineer).toBeVisible();
    await expect(this.noIdQAEngineer).toHaveText(title);
    await this.noIdQAEngineer.textContent();
    console.log(this.noIdQAEngineer);
  }
}
