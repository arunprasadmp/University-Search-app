University Search App

Description

This University Search App includes a search page and a favourites page. It allows users to search for universities by country, filter results by name, and manage a list of favourites. The application is fully responsive and provides performance metrics for API calls.

Features

 Search page
  - Dropdown to select a country and filter results
  - Search box to filter results by name
  - Table displaying Name, State/Province, and Website
  - Button to add/remove items from favourites
  - API performance tracking (response code and duration)
  - Clear All Filters button
  - Link to navigate to the Favourites page

 Favourites Page
  - Table displaying Name, State/Province, and Website of favourite items
  - Button to remove items from favourites
  - Link to navigate back to the Search page

Installation

To run in Angular Live server

1. Install Node.js
2. Unzip the redbrick-project.zip file and navigate to redbrick-project directory
3. Install Angular cli
	 npm install -g @angular/cli
4. Install dependencies 
	 npm install
5. Run the application 
	 ng serve
6. Access the application at http://localhost:4200

To build and run the Docker container:

1. Build the Docker image:
	docker build -t redbrick-project .
2. Run the Docker container:
	docker run -d -p 8080:80 redbrick-project
3. Access the application at http://localhost:8080.

