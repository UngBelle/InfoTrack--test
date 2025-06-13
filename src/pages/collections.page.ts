import { expect, Locator, Page } from "@playwright/test";
import { PageBase } from "./_base";

export class CoursesCollectionsPage extends PageBase {
  readonly PATH = "/collections";
  readonly TIMEOUT_SECONDS = 30;
  readonly PAGE_READY_ELEMENT: Locator;

  readonly authenApiCypressCourse: Locator;

  constructor(page: Page) {
    super(page);
    this.authenApiCypressCourse = page.getByText(
      "Coding and testing an authentication API [NodeJs + Cypress]",
    );
    this.PAGE_READY_ELEMENT = this.authenApiCypressCourse;
  }

  async clickOnCypressCourse() {
    await expect(this.authenApiCypressCourse).toBeVisible({ timeout: 30000 });
    await this.authenApiCypressCourse.click({ force: true });
  }
}
