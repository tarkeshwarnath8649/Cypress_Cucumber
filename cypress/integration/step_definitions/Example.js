import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("I launch the application", () => {
  console.log("Login Page is launched");
});

When("I enter the username", () => {
  console.log("Entering Username!!!!!!!");
});

When("I enter the password", () => {
  console.log("Entering Password!!!!!!!");
});

When("I click on login button", () => {
  console.log("Logging in!!!!!!");
});

Then("I should be succesfully logged in", () => {
  console.log("I logged in successfully!!!!!!");
});
And("I should be on the Home Page", () => {
  console.log("I am currently at Home Page!!!!!!!");
});
