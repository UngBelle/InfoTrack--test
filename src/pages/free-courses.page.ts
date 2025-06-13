import { Locator, Page } from "@playwright/test";
import { PageBase } from "./_base";

export class FreeCourses extends PageBase {
  readonly PATH = "/";
  readonly TIMEOUT_SECONDS = 30;
  readonly PAGE_READY_ELEMENT: Locator;

  readonly authenApiCypressCourse: Locator;

  readonly enrollForFreeButton: Locator;

  constructor(page: Page) {
    super(page);
    this.authenApiCypressCourse = page.getByText(
      "Coding and testing an authentication API [NodeJs + Cypress]",
    );
    this.enrollForFreeButton = page.getByRole("link", {
      name: "Enroll for free",
    });
  }
}
