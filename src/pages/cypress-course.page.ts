import { Locator, Page } from "@playwright/test";
import { PageBase } from "./_base";

export class cypressCoursePage extends PageBase {
  readonly PATH = "/";
  readonly TIMEOUT_SECONDS = 30;
  readonly PAGE_READY_ELEMENT: Locator;

  readonly sucessLogo: Locator;

  constructor(page: Page) {
    super(page);
    this.sucessLogo = page.locator(
      '//*[contains(@class,"course-player")]//div[contains(@class,"logo)"]',
    );
    this.PAGE_READY_ELEMENT = this.sucessLogo;
  }
}
