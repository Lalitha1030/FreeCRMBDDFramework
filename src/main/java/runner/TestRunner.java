package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "/Users/kollas/workspace1/FreeCRMBDDFramework/src/main/java/Features/login.feature", //the path of the feature file
		glue = {"stepDefinitions"},   //path of step definition file
		format= {"pretty", "html:test-output", "json:json_output/cucumber.json"},  // it generates output file with pretty format
		monochrome = true,    // display the console output in a readable format
		strict = true,        // it will check if any step is not defined in step definition file
		dryRun = false        // to check the mapping is proper between feature file and step definition file(if dryrun is true then it tests all mapping are correct are not but not execute, if dryrun is false it will execute test)
		
		
		
		
		)


public class TestRunner {
	

}
