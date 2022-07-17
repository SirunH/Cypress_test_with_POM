# In this e2e test, we  should
1. Navigate on the https://www.booking.com/ page
2. Choose destination
3. Select Date
4. Increase the number of adults
5. Filter by 4 star
6. Check result list have items only 4 stars

## Getting started
### Setup
> 1.GLOBAL DEPENDENCIES

###### `Install Node.js.`

The project is written using the
* v17.8.0 version of Node.js 
* 8.5.5 version of npm
* 9.7.0 version of Cypress

> 2.PROJECT DEPENDENCIES

* cd to the root directory of the project
* Install Node modules using:
###### `npm install`


> 3.RUNNING TESTS

For running the test from your terminal or IDE use one of these two commands
1) Run tests in UI mode:
###### `npx cypress open`

2) Run tests in Headless mode:
###### `npx cypress run`