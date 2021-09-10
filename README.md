# Olio Clone

## **An application to view unwanted food and other articles listed via Olio, built using React and Nextjs**


### This application has the following features
* A list of articles currently available via Olio.
* A map showing the location of these items.
* Articles are flagged as viewed once clicked in either the list or map view. The list of viewed articles persists between the list and map view:
	* The top right corner of list articles turn green.
	* The article pin on the map turns green.
* Clicking on a list article expands the article card to display additional details.
* Clicking on a map pin shows a popup with the article title and a 'more info' button.  Clicking on the button returns the user to the article list view with the article card expanded to show all item details.


## Getting Started

### Prerequisites

To run this code you will require [ Node.js](https://nodejs.org/en/) and [ npm](https://www.npmjs.com/).


### Project Setup

1. Clone this git repository using your preferred method and then navigate to the project folder (olio-clone) using your terminal.

2. In the project's root directory create a .env file and add `ARTICLE_API_URL=` followed by the URL that I shared with you separately.

3. Install the required dependencies by running `npm install`.

4. This application uses Airbnb's ESLint rules for linting.  Check that the code is passing by running `npm run lint`.

5. The application also has test coverage, so run the tests to ensure everything is OK using `npm run test`.


### Running The Application

1. In your browser run `npm run dev`, the application should compile with no errors.
2. Navigate to [http://localhost:3000](http://localhost:3000) and explore the items currently available!


### Notes:
* This is a proof of concept application and is a work in progress.  To get the app production-ready it would need the following work, at a minimum:
	* Test coverage for all components, actions, and reducers.
	* End to end tests.
	* Proper styling of components following actual designs.
	* Implementation of a global stylesheet and the use of additional media queries for a more responsive user experience.