import { Locator, Page } from "@playwright/test";
import { PageBase } from "./_base";

export class CoursesPage extends PageBase {
  readonly PATH = "/";
  readonly TIMEOUT_SECONDS = 30;
  readonly PAGE_READY_ELEMENT: Locator;

  readonly enrollForFreeButton: Locator;

  constructor(page: Page) {
    super(page);
    this.enrollForFreeButton = page.getByRole("link", {
      name: "Enroll for free",
    });
  }

  async clickOnEnrollForFreeButton() {
    await this.enrollForFreeButton.click();
  }
}
