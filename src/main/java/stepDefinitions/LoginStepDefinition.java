package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefinition {
	WebDriver driver;
	
	@Given("^User is already on login page$")
	public void user_already_on_login_page(){
		System.setProperty("webdriver.gecko.driver", "C:\\Selenium\\geckodriver-v0.26.0-win32\\geckodriver.exe");
		//DesiredCapabilities capabilities = DesiredCapabilities.firefox();
		//capabilities.setCapability("marrionette", true);
		//driver = new FirefoxDriver(capabilities);
		driver = new FirefoxDriver();
		driver.get("https://classic.freecrm.com/");
		
	}
	@When("^Title of login page is from CRM$")
	public void title_of_login_page_is_from_CRM() {
	    String title = driver.getTitle();
	    System.out.println("Title of the page:  "+title);
	   // Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support", title);
	    
	}
	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters(String username, String password)  {
		
		//driver.findElement(By.xpath("//span[contains(text(),'Log In')]")).click();
		
		driver.findElement(By.name("username")).sendKeys("username");
		driver.findElement(By.name("password")).sendKeys("password");
			
				
	  
	}
	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() {
		/*
		WebElement loginBtn = driver.findElement(By.xpath("//span[@id='submitButton']"));
		loginBtn.click();
		*/
		WebElement loginBtn = driver.findElement(By.xpath("//input[@type='submit']"));
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		jse.executeScript("arguments[0].click();", loginBtn);
		    
	}
	
	@Then("^user is on home page$")
	public void user_is_on_home_page()  {
		String title = driver.getTitle();
		System.out.println("Home Page:  "+title);
		Assert.assertEquals("CMRPRO", title);
	    
	}
	
	@Then("^user moves to new contact page$")
	public void user_moves_to_new_contact_page(){
		driver.switchTo().frame("mainpanel");
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//a[contains(text(), 'Contacts')]"))).build().perform();
		driver.findElement(By.xpath("//a[contains(text(), 'New Contact']")).click();
		
	}
	
	

	@Then("^user enters contact details \"(.*)\" and \"(.*)\" and \"(.*)\" $")
	public void user_enters_contact_details(String firstname, String lastname, String position)  {
		
	    
	}
	@Then("^user closes the browser$")
	public void user_closes_the_browser()  {
	    
	}

	

}
