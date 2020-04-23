Feature: Free CRM Login Feature

Scenario Outline: Free CRM login Test Scenario
	Given User is already on login page
	When Title of login page is from CRM
	Then user enters "<username>" and "<password>"
	Then user clicks on login button
	Then user is on home page
	Then user moves to new contact page
	Then user enters contact details “<firstname>" and "<lastname>" and "<position>"
	Then user closes the browser
	
Examples:
	| username 		   |password  | firstname|lastname  |position|
	| batchautomation  |Test@12345| smitha   |kolli     |Automation Tester|
	| batchautomation  |Test@12345|Devi      |gabba     |QA Lead|
	

	
