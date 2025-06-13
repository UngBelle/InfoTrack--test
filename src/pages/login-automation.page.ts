import { expect, Locator, Page } from "@playwright/test";
import { PageBase } from "./_base";

export class LoginAutomationPage extends PageBase {
  readonly PATH = "/users/sign_in";
  readonly TIMEOUT_SECONDS = 30;
  readonly PAGE_READY_ELEMENT: Locator;

  readonly welcomeTitle: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly rememberMeCheckBox: Locator;
  readonly signInButton: Locator;

  readonly emailErrorMessage: Locator;
  readonly errorMessageWithoutSignUp: Locator;
  readonly errorMessageAfterSignIn: Locator;

  readonly forgotPassword: Locator;
  readonly emailInputOfForgotPassword: Locator;
  readonly submitButtonOfForgotPassword: Locator;
  readonly successMessageOfForgotPassword: Locator;

  readonly welcomeMessageAfterSignInSuccessfully: Locator;

  constructor(page: Page) {
    super(page);

    // Title
    this.welcomeTitle = page.getByText("Welcome");

    // Fields
    this.emailInput = page.getByPlaceholder("Email");
    this.passwordInput = page.getByPlaceholder("Password");
    this.rememberMeCheckBox = page.getByRole("checkbox", {
      name: "Remember me",
    });
    this.signInButton = page.getByRole("button", { name: "Sign in" });

    // Error messages
    this.emailErrorMessage = page.getByText(
      "Please enter a valid email address",
    );
    this.errorMessageWithoutSignUp = page.locator("#notice");
    this.errorMessageAfterSignIn = page.locator(".message-text");

    // Forgot Password section
    this.forgotPassword = page.getByRole("link", { name: "Forgot password?" });
    this.emailInputOfForgotPassword = page.getByPlaceholder("Email");
    this.submitButtonOfForgotPassword = page.getByRole("button", {
      name: "Submit",
    });
    this.successMessageOfForgotPassword = page.locator(
      ".password-reset__heading",
    );

    this.welcomeMessageAfterSignInSuccessfully = page.getByText(
      "Welcome back, Belle U!",
    );
    this.PAGE_READY_ELEMENT = this.welcomeTitle;
  }

  async fillMandatoryEmailAndPassword(
    emailValue: string,
    passwordValue: string,
  ) {
    await this.emailInput.fill(emailValue);
    await this.passwordInput.fill(passwordValue);
  }

  async assertRememberMeCheckBoxShouldBeChecked() {
    // await this.rememberMeCheckBox.isChecked();
    await expect(this.rememberMeCheckBox).toBeChecked();
  }

  async assertErrorMessageWithInvalidEmail() {
    await expect(this.emailErrorMessage).toHaveText(
      "Please enter a valid email address",
    );
  }

  async clickOnSignInButton() {
    await this.signInButton.click();
  }

  async assertErrorMessageAfterClickingSignInButtonWithoutSignUp() {
    await expect(this.errorMessageWithoutSignUp).toHaveText(
      "Invalid email or password.",
    );
  }

  async assertErrorMessageAfterClickingSignInButton() {
    await expect(this.errorMessageAfterSignIn).toHaveText(
      "Invalid email or password.",
    );
  }

  async clickOnForgotPassword() {
    await this.forgotPassword.click();
  }

  async fillEmailAndClickOnSubmitButtonOfForgotPassword(value: string) {
    await this.emailInputOfForgotPassword.fill(value);
    await this.submitButtonOfForgotPassword.click();
  }

  async successMessageAfterSubmittingPasswordRequest() {
    await expect(this.successMessageOfForgotPassword).toHaveText(
      "Help is on the way!",
    );
  }

  async welcomeBackMessageAfterSignInSuccessfully() {
    await expect(this.welcomeMessageAfterSignInSuccessfully).toHaveText(
      "Welcome back, Belle U!",
    );
  }
}
