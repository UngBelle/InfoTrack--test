import { Locator, Page } from "@playwright/test";
import { PageBase } from "./_base";

export class FakePricingPage extends PageBase {
  readonly PATH = "/fake-pricing-page";
  readonly TIMEOUT_SECONDS = 5;
  readonly PAGE_READY_ELEMENT: Locator;

  readonly browseDocsButton: Locator;

  constructor(page: Page) {
    super(page);
    this.browseDocsButton = page.getByRole("link", { name: "Browse Docs" });
    this.PAGE_READY_ELEMENT = this.browseDocsButton;
  }
}
