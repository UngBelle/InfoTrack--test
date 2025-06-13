import { Locator, Page } from "@playwright/test";
import { PageBase } from "./_base";

export class ComplicatedPage extends PageBase {
  readonly PATH = "/complicated-page";
  readonly TIMEOUT_SECONDS = 5;
  readonly PAGE_READY_ELEMENT: Locator;

  readonly loginButtonFirstForm: Locator;

  constructor(page: Page) {
    super(page);
    this.loginButtonFirstForm = page
      .locator("button", { hasText: "Login" })
      .first();
    this.PAGE_READY_ELEMENT = this.loginButtonFirstForm;
  }
}
