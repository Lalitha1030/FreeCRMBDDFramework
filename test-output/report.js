$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/kollas/workspace1/FreeCRMBDDFramework/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Title of login page is from CRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters contact details “\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user closes the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 14,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "batchautomation",
        "Test@12345",
        "smitha",
        "kolli",
        "Automation Tester"
      ],
      "line": 15,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "batchautomation",
        "Test@12345",
        "Devi",
        "gabba",
        "QA Lead"
      ],
      "line": 16,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Free CRM login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Title of login page is from CRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"batchautomation\" and \"Test@12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters contact details “smitha\" and \"kolli\" and \"Automation Tester\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 7751576899,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_from_CRM()"
});
formatter.result({
  "duration": 7233805,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "batchautomation",
      "offset": 13
    },
    {
      "val": "Test@12345",
      "offset": 35
    }
  ],
  "location": "LoginStepDefinition.user_enters(String,String)"
});
formatter.result({
  "duration": 188862965,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 71944802,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 9994354,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003cC[MRPRO]\u003e but was:\u003cC[RMPRO - CRM software for customer relationship management, sales, and support.]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepDefinitions.LoginStepDefinition.user_is_on_home_page(LoginStepDefinition.java:62)\r\n\tat ✽.Then user is on home page(/Users/kollas/workspace1/FreeCRMBDDFramework/src/main/java/Features/login.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_new_contact_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginStepDefinition.user_closes_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "Free CRM login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Title of login page is from CRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"batchautomation\" and \"Test@12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters contact details “Devi\" and \"gabba\" and \"QA Lead\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 6731237266,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_from_CRM()"
});
formatter.result({
  "duration": 7055467,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "batchautomation",
      "offset": 13
    },
    {
      "val": "Test@12345",
      "offset": 35
    }
  ],
  "location": "LoginStepDefinition.user_enters(String,String)"
});
formatter.result({
  "duration": 167411799,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 42764674,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 7130254,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003cC[MRPRO]\u003e but was:\u003cC[RMPRO - CRM software for customer relationship management, sales, and support.]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepDefinitions.LoginStepDefinition.user_is_on_home_page(LoginStepDefinition.java:62)\r\n\tat ✽.Then user is on home page(/Users/kollas/workspace1/FreeCRMBDDFramework/src/main/java/Features/login.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_new_contact_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginStepDefinition.user_closes_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});