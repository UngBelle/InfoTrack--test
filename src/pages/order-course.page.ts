import { expect, Locator, Page } from "@playwright/test";
import { PageBase } from "./_base";

export class CourseOrder extends PageBase {
  readonly PATH = "/";
  readonly TIMEOUT_SECONDS = 30;
  readonly PAGE_READY_ELEMENT: Locator;

  // Sign Up To Enroll for Free
  readonly emailInput: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly agreementCheckbox: Locator;
  readonly signUpToEnrollButton: Locator;

  readonly freeCourse: Locator;
  readonly freeCoursePrice: Locator;

  constructor(page: Page) {
    super(page);
    // Sign up to enroll for free
    this.emailInput = page.getByPlaceholder("Email");
    this.firstNameInput = page.getByPlaceholder("First name");
    this.lastNameInput = page.getByPlaceholder("Last name");
    this.agreementCheckbox = page.locator(
      '//input[@id="terms-and-privacy-checkbox"]',
    );
    this.signUpToEnrollButton = page.getByRole("button", { name: "Sign up" });

    this.freeCourse = page.getByText("Free");
    this.freeCoursePrice = page.getByText("$0.00");
  }

  async fillInfoToSignUp(email: string, firstName: string, lastName: string) {
    await this.emailInput.fill(email);
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
  }

  async clickOnAgreementCheckBox() {
    await this.agreementCheckbox.click({ force: true });
  }

  async assertTermsAndPolicyCheckBox() {
    await expect(this.agreementCheckbox).toBeChecked();
  }

  async clickOnSignUpButtonToEnroll() {
    await this.signUpToEnrollButton.click({ force: true });
  }
}
