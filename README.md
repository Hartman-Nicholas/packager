# README - Packager App

### Introduction

This React application was developed  during the Software Development Academy (SDA) to practice core skills in developing React application, such as functional components, hooks, local state and Global state to name a few. We also needed to use our knowledge of HTML to ensure the correct semantic tags where used and CSS for styling and responsive design across all platform types using a mobile first approach.

### App description

A Front-End web site that allows a user to view their package orders, search by parcel ID or filter their packages based on the current parcel status. The Data is fetched from a Mock API using Axios and rendered to the screen. For extra functionality I also linked to the google API in order to show where the package is currently located for increased visibility. 

## Running the Application

##### Requirements:

- Nodejs
- Integrated development environment (IDE)
- GIT

##### Using an IDE and GIT

1. In your IDE Terminal navigate to the directory where you would like to store the application.

2. Clone the project repo and pull a copy of the repo to your local machine using the following command.

   `$ git clone https://github.com/Hartman-Nicholas/packager.git  `

3. Once the clone is finished navigate inside the project folder and install the project dependencies by running the following command
   `$ npm install `

4. Once the dependencies are installed you can use the following command to run the application.`$ npm run start`This runs the app in the development mode. You need to navigate to  [localhost](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

##### Deployment

As there are many different hosting sites each with their own deployment methods it is recommended that you refer to your particular hosting site for guidance on deploying a react application to a server. 



## Project Considerations

Due to time constraints there are several areas of the application that can reviewed and possibly refactored and improved.

- Design scalability, most of the project has been designed with scalability in mind, however the following definitely would need to be considered and implemented
  - Pagination to limit the amount of data displayed and fetched on the home page.
  - The search and filter methods would need to be changed to query the server instead of filtering the fetched data as you are only receiving a sample of the data and not the complete results.
  - Would need to liaise with the backend to find the best way to get the data without fetching the whole data object.

- The Filter By located on the home page currently use input type set to checkboxes, as these are linked to the package status you would only ever select one at a time. As such this should rather be refactored to use radio buttons. Consideration can also be given to a better method of optional filtering, or adjusting the filter to a search method. So lots of room to develop.
- I am linking to the Google API to show the location of the package in the Detailed package View and then I also have a World Map which shows the location of all the users packages. I use two separate components to generate each map. This should be refactored to use only one map component and render according to the information passed to it.  
- The user is able to switch between languages by clicking on a flag in the top right, at this stage it toggles between English and Swedish. I have used info objects that contains either the English or Swedish and is rendered depending on the user selection. I liked this approach as it keeps all the language elements contained and easily reviewable and updateable, but I am not sure it is the best way of doing this and would need to research and review further.

## Dependencies

##### Production

- react: V17.0.2
- axios: V0.21.1
- recoil: V0.2.0
- @react-google-maps/api: V2.1.1
- typescript: V4.1.2

##### Development

- node-sass: V5.0.0

