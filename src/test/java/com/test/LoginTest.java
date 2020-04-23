package com.test;


import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class LoginTest {
	//What is log?: capturing info/activities at the time program execution
	//types of logs:
	//1. infor
	//2. warning
	//3. error
	//4. fatal
	
	// how to generate logs? : use Apache log4j API(log4j jar)
	//How it works? : it reads log4j configuration from log4j.properties file
	
WebDriver driver;

@BeforeMethod
public void setUp(){
	System.setProperty("webdriver.gecko.driver", "C://Selenium//geckodriver-v0.26.0-win32//geckodriver.exe");
	driver = new FirefoxDriver();
	
	driver.manage().window().maximize();
	driver.manage().deleteAllCookies();
	driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
	driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	
	driver.get("https://classic.freecrm.com/");
}

@Test(priority=1)
public void freeCrmTitleTest(){
	String title = driver.getTitle();
	System.out.println(title);
	Assert.assertEquals("CRMPRO  - CRM software for customer relationship management, sales, and support.", title);
	
}

@Test(priority=2)
public void freeCRMLogo(){
	boolean b = driver.findElement(By.xpath("/img[@class='img-responsive']")).isDisplayed();
	Assert.assertTrue(b);
}

@AfterMethod
public void tearDown(){
	driver.quit();
}
}
