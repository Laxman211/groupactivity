Feature: Hotel Operations 
User login page shall takes place here
@HotelTest
Scenario: Operation for users
Given the user on the login form
When user enter valid data on the page
| Fields | Values |
| Username     | laxmanbaskaran211 |
| password     | Laxman211         |
When the user clicking the login button
Then the page is navigated to search hotel page
When the user enter the data into the search page
When the user clicking the search button 
Then it shows the details of the hotel 

