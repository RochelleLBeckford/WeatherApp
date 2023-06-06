/*
& Build out a Weather App

& create an Index HTML and CSS file
-> create boiler plate and change the title of the page name to suit the project
-> link the css file to the index html

& Font Awesome -> add search and other icons
-> sign in
-> go to kits
-> click free 
-> copy script code ->
    <script
    src='https://kit.fontawesome.com/b2932c2b71.js'
    crossorigin='anonymous'
    ></script>
-> paste this code before closing body tag

& HTML 
-> Code out what info you want to appear on the web page for the weather app
-> img of the forecast
-> Include city, state, forecast, temp., min and max temp.
-> real feel, humidity, wind, pressure
-> Include icons for them and the degree sign [&#176] following F or C

& CSS
-> now to style the page and allow it to look cleaner
-> import the desired font for the webpage
-> format all the classed created in html
-> utilize @media -> make this responsive in regards to different media devices -> browser, laptop, tablet, phone, etc
& JS
-> now to make the project responsive
-> display the data using open weather API
-> create a js file 
-> link the file to the html document 
-> Sign in to Open Weather API to use api keys 
    -> make sure api key is switched to active 
    ~ creating an API key for the 1st time can take 2 hrs or more
    -> then go to to API tab from menu bar to start making requests
    -> "Current Weather Data" - go to the documentation scroll down to see how to make a request by city name under built in geo coding 
-> hard code Lond as the city name and reload the page then check what appears in the console 
    -> if it works will get back weather info regarding the city
    -> i.e. under a main -> feel_like, humidity, pressure,temp etc.
    -> by default the #'s are large because this API using standard units and if there is no param it will be used by default 
    -> after API_KEY place &units=metric -> hard code metric unit
    -> check console now get temp in degree Celsius
    -> change hard coded city name and unit to var's created for them

* Create a function that will take the country code and return the full country name 
    -> i.e. US -> United States

* Create a function that will convert the timestamp 
    -> convert date and time unix timestamp to full datetime

* Get the weather forecast

* Get the weather Icon 

* Get the weather minMax 

* Make it so that i can search for a city and the values will be updated respective to that city chosen
-> get the document

* Be able to change unit of degrees Celsius or Fahrenheit
    -> when using metric want the wind to be meters per second
    -> when using imperial want the wind to be miles per hour

* When the form is submitted I want the search form to clear
    -> search.value = empty string 
*/