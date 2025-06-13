import { Locator, Page } from "@playwright/test";

export abstract class PageBase {
  abstract readonly PATH: string;
  abstract readonly TIMEOUT_SECONDS: number;
  abstract readonly PAGE_READY_ELEMENT: Locator;
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async isLoaded() {
    await this.PAGE_READY_ELEMENT.waitFor({
      timeout: this.TIMEOUT_SECONDS * 1000,
    });
  }

  async goto() {
    await this.page.goto(this.PATH, { timeout: this.TIMEOUT_SECONDS * 1000 });
    await this.isLoaded();
  }
}
