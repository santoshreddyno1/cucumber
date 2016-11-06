$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test.feature");
formatter.feature({
  "id": "login-action",
  "description": "",
  "name": "Login Action",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "login-action;successful-login-with-valid-credentials",
  "description": "",
  "name": "Successful Login with Valid Credentials",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "User is on Home Page",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "User Navigate to LogIn Page",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "User enters UserName and Password",
  "keyword": "And ",
  "line": 6
});
formatter.step({
  "name": "Message displayed Login Successfully",
  "keyword": "Then ",
  "line": 7
});
formatter.match({
  "location": "StepDef.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 369549529,
  "status": "pending",
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat test.cucumberTest.StepDef.user_is_on_Home_Page(StepDef.java:13)\r\n\tat ✽.Given User is on Home Page(test.feature:4)\r\n"
});
formatter.match({
  "location": "StepDef.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDef.user_enters_UserName_and_Password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDef.message_displayed_Login_Successfully()"
});
formatter.result({
  "status": "skipped"
});
});