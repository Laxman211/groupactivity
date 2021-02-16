package groupactivity;

import java.io.File;
import java.util.List;

import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.annotation.After;
import cucumber.annotation.Before;
import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;
import cucumber.table.DataTable;


public class HotelOperations {

    @Before
    public void beforeScenario(){
          System.setProperty("webdriver.chrome.driver",
                    "./src/main/resources/chromedriver.exe");
            
            driver = new ChromeDriver();
    } 
    WebDriver driver;

 

    @Given("^the user on the login form$")
    public void open_the_Browser_and_launch_the_application() throws Throwable {
        driver.navigate().to("http://adactinhotelapp.com/HotelAppBuild2/index.php");
        System.out.println("Login page of the application is opened.");
    }


    @When("^user enter valid data on the page$")
    public void enter_valid_data(DataTable table) throws Throwable {
        //List<List<String>> data   = table.raw();
        List<List<String>> data=table.raw();
        driver.findElement(By.id("username")).sendKeys(data.get(1).get(1));
        Thread.sleep(2000);
        driver.findElement(By.id("password")).sendKeys(data.get(2).get(1));
        Thread.sleep(2000);
        System.out.println("data entered in the application");
        }
    
    @When("^the user clicking the login button$")
    public void successful_login() throws Throwable {
        driver.getTitle().contains("Title");
        driver.findElement(By.xpath("//input[@id='login']")).isEnabled();
	    driver.findElement(By.xpath("//input[@id='login']")).click();
        System.out.println("Matching the title of the page after successful Login.");
       
        TakesScreenshot takescreenshots =((TakesScreenshot)driver);
        File SrcFile=takescreenshots.getScreenshotAs(OutputType.FILE);
        File DestFile=new File("./target/ScreenShots/AfterLogin.png");    
        FileUtils.copyFile(SrcFile, DestFile);
        }
    
    @Then("^the page is navigated to search hotel page$")
    public void verify_the_page_is_navigated_to_search_hotel_page()  throws Throwable {
    	String pageUrl = driver.getCurrentUrl();
	    boolean contains = pageUrl.contains("SearchHotel");
	    System.out.println("Search Hotel page is loaded successfully" + contains);
	    }
    
    @When("^the user enter the data into the search page$")
    public void user_enter_data_into_search_page() throws Throwable {
    	Select location = new Select(driver.findElement(By.cssSelector("select#location")));
        location.selectByIndex(2);
        Thread.sleep(2000);
        
        Select hotel = new Select(driver.findElement(By.cssSelector("select#hotels")));
        hotel.selectByVisibleText("Hotel Hervey");
        Thread.sleep(2000);
        
        Select roomtype = new Select(driver.findElement(By.cssSelector("select#room_type")));
        roomtype.selectByValue("Standard");
        Thread.sleep(2000);
        
        Select roomno = new Select(driver.findElement(By.cssSelector("select#room_nos")));
        roomno.selectByValue("2");
        Thread.sleep(2000);
        
        driver.findElement(By.cssSelector("input#datepick_in")).sendKeys("15/02/2020");
        Thread.sleep(2000);
        
        driver.findElement(By.cssSelector("input#datepick_in")).sendKeys("16/02/2020");
        Thread.sleep(2000);
        
        Select adult = new Select(driver.findElement(By.cssSelector("select#adult_room")));
        adult.selectByValue("2");
        Thread.sleep(2000);
        
        Select child = new Select(driver.findElement(By.cssSelector("select#child_room")));
        child.selectByValue("2");
        Thread.sleep(2000);
        }
    
    @When("^the user clicking the search button$")
    public void user_clicking_the_search_button() throws Throwable {
    	driver.findElement(By.cssSelector("input#Submit")).isEnabled();
	    driver.findElement(By.cssSelector("input#Submit")).click();
	    Thread.sleep(2000);
        }
    
    @Then("^it shows the details of the hotel$")
    public void shows_details_of_hotal() throws Throwable{
    	String actualTitle = driver.getTitle();
	    String Expected = "Adactin.com - Select Hotel";
	    Assert.assertEquals(Expected, actualTitle);
	    Thread.sleep(3000);
	    TakesScreenshot takescreenshot =((TakesScreenshot)driver);
        File SrcFile=takescreenshot.getScreenshotAs(OutputType.FILE);
        File DestFile=new File("./target/ScreenShots/HotelSearch.png");    
        FileUtils.copyFile(SrcFile, DestFile);
        }
    
    @After
    public void Close_the_browser() throws Throwable {
        driver.close();
        System.out.println("Closes the browser opened through selenium");
           
        }
}