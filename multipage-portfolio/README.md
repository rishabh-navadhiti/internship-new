# Portfolio site

This is a multipage portfolio website using React and Material UI.

### Key Details

- All components like header, footer and page components are based on Material UI and MUI icons
- The site contains mainly `Home` page, `About` page, `Projects` page and `Contact Page`
- Additional Login Page, Project Details page and 404 Not Found page are also present
- Navigation is done through the header and routes are handled by react router dom package
- The site has a basic authentication system.
- The Individual Project Details page is a protected route which requires login to access
- The auth is stored in the browser local storage and  expiries after a certain duration 

### Home page

- Basic details, name pfp and an action button to download resume.

### About Page
- Extra details about me
- Cards displaying Skills using a MUI Progress bar and MUI Icons
- Dynamic skill detilas, they are stored in an Array and can be updated by adding a new element to an array, auto added to the grid.

### Contact page
- A contact form to send a messge, which does nothing for now
- A card displaying contact information along with working links to Github and Linkedni

### Projects Page

- Cards displaying all the projects worked on and a basic overview of each project, with a view details action button for each card
- Clicking on the button will promp a login, if the user is not already authenticated.
- The individual project details are a protected route, which will contidionally display either the login page or the project page based on auth
- The project details are taken from a json files which stores detailed information about the projects

### Project Details
- Contains all the details of a particular project
- A demo image
- Action buttons linking to the github page and the live demo of the project