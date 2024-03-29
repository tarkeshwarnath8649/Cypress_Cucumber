import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("This step will run before every scenario", () => {
  console.log("Execute before each scenario");
});

Given("I launch the application1", () => {
  console.log("I am in new Step definition file");
});

When("I enter the username {string}", (username) => {
  console.log(`Username is : ${username}`);
});

When("I enter the password {string}", (password) => {
  console.log(`Password is : ${password}`);
});

Given("This is my second test case", () => {
  console.log("2nd Test starts!!!!!!!");
});
