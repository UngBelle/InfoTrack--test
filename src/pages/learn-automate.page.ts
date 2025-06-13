import { Locator, Page } from "@playwright/test";
import { PageBase } from "./_base";

export class LearnHowToAutomatePage extends PageBase {
  readonly PATH = "/sample-application-lifecycle-sprint-1";
  readonly TIMEOUT_SECONDS: 5;
  readonly PAGE_READY_ELEMENT: Locator;

  readonly submitSprintButton: Locator;

  constructor(page: Page) {
    super(page);
    this.submitSprintButton = page.locator("#submitForm");
    this.PAGE_READY_ELEMENT = this.submitSprintButton;
  }
}
