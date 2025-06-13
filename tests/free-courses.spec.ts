import { test } from "@playwright/test";
import { AutomationPage } from "../src/pages/automation.page";
import { CoursesCollectionsPage } from "../src/pages/collections.page";
import { CoursesPage } from "../src/pages/courses.page";
import { CourseOrder } from "../src/pages/order-course.page";
import { faker } from "@faker-js/faker";
import { CompleteSignUpPage } from "../src/pages/complete-signup.page";
import { cypressCoursePage } from "../src/pages/cypress-course.page";

test("Free Course E2E", async ({ page }) => {
  const automationPage = new AutomationPage(page);
  await automationPage.goto();
  await automationPage.clickFreeCourses();

  const collectionsPage = new CoursesCollectionsPage(page);
  await collectionsPage.clickOnCypressCourse();

  const courses = new CoursesPage(page);
  await courses.clickOnEnrollForFreeButton();

  const courseOder = new CourseOrder(page);

  await courseOder.fillInfoToSignUp(faker.internet.email(), "Belle", "Ung");
  await courseOder.clickOnAgreementCheckBox();
  await courseOder.assertTermsAndPolicyCheckBox();
  await courseOder.clickOnSignUpButtonToEnroll();

  const completeSignup = new CompleteSignUpPage(page);
  await completeSignup.isLoaded();

  await completeSignup.fillPasswordAndClickOnNextButton("1234567890");

  const cypressCourse = new cypressCoursePage(page);
  await cypressCourse.isLoaded();
});
