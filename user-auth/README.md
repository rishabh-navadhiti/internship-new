# Login Handling and User Authentication

## Project Details

1. Backend handling for user login, registration and authentication
2. On User Registration the data is stored in Firestore DB
3. User login requests validates the credentials, and generates a JWT token, with an expiry of 2 hours 
4. Perform user data changes and deletion on user request, verifying the JWT token

## Tech

---

## Project Structure

### Config

Directory contains the database config and access funcitons. 

`getAccessToken.js` file uses the `google-auth-library` module to authorize the app to be able to access the Firebase project and the Firestore DB within.

The module exports a function which requests for a token and returns it.

`firebase.js` file uses  the above module to generate a token for each request, and makes a HTTP request to the database using `axios`. The request methods and URLs are dynamially handled.

---

### Schemas

`userSchemas.js` file contains 3 `zod` schemas defined for registering new user, login user and update user info respectively. It is used to validate the req object before perforimg the DB operation.

---

### Routes

5 routes are present in the application

- `/register` - Register new user
- `/login` - Login user and generate token
- `/user/update/:id` - update user credentials
- `/user/inactive/:id` - make user inactive
- `/user/delete/:id` - delete user

#### Register

Takes in the register request details
DB query is made to get all docs in Firestore
Check for existing user with same email
Hash the password to store it safely
save details in DB

#### Login 

Takes user credentials
DB quert to get all docs in firestore
Check if user exist, email and password valid
Generate a jwt token and set expiry to 2hours

#### Update

take user details, optionally
Any 1 or all of them can be updated

#### Mark inactive

User the update methods to only change the isActive field

---


### middleware

#### Validate

Middleware attached to register, login and update routes
Reads the request body, validates it against the zod schema and returns the object if successful

#### auth

Middleware attached to update, mark inactive and delete routes
Reads the token from the request header, authorization field
Verifies the token and JWT verification is succesful, stores the user object in req and moves ahead
The client must provide the token in the header to access any "protected" route having this middleware

---

### Helpers

#### User operations

`userOperations.js` file contains async methods performing DB calls to get, post, patch and delete from Firebase using the request method from `firebase.js`

The data is converted or processed with the proper format and object fields needed by firebase


### Hash

bcrypt package to hash the user password before storing the the library
helper function to compare the login password input to the DB hash and verify the password

