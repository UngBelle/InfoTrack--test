import { Locator, Page } from "@playwright/test";
import { PageBase } from "./_base";

export class FakeLandingPage extends PageBase {
  readonly PATH = "/fake-landing-page";
  readonly TIMEOUT_SECONDS = 5;
  readonly PAGE_READY_ELEMENT: Locator;

  readonly viewCourseButton: Locator;

  constructor(page: Page) {
    super(page);
    this.viewCourseButton = page.getByRole("link", { name: "View Course" });
    this.PAGE_READY_ELEMENT = this.viewCourseButton;
  }
}
