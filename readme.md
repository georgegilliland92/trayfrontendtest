# George's Form Project ReadMe

## How to use 

- Download the Github repo as a Zip or clone it through your terminal
- Once downloaded, unzip it, or once clonced, cd to the projects root in the terminal
- Once done, ```run npm install``` to download all of the packages
- After they have all downloaded, type ```npm run start```
- Head over to ```localhost:3000``` in your browser to view the projects output


## Testing

Testing was split into two parts. Firstly, using Jest, we have a set of unit tests that renders a react element (App) into the DOM using the supplied container, a DIV in this case. This should confirm that the element and all of its child components have been rendered in to the DOM. As well as a small set of tests for a variety of components, that test their input/values. To run these tests, run ```npm test``` in the terminal.

The second part of the testing

The second and final part of the testing was ensuring that the forms logic matched what was described/required in the brief. The requirements were:

Page One (User)
- Show that the current page is User
- Show label, field and required info for each data element
- Name (required), Email (required), Password (required)
- Email must be a valid email (conforms to standard email address patterns)
- Password must be greater than 9 characters long, and include at leat one number, one lowercase character, and one uppercase character
- The required fields, a valid email, and valid password must be entered before progressing to the next page

Page Two (Privacy)
- Offer two communication options. According to the brief, user input is not required for both fields
- The user can progress to the next stage at any point on this page

Page Three
- Console.log the users output and display a completion screen

### Test Case One
#### Type the following values into the relevant fields
- name = George

- role = Implementation Engineer

- email = george@tray.io

- password = George1234

- mainProduct = true

- allProducts = true

#### Output
- No error messages on first screen
- console.log should be:
```
{
    communication_allProducts: true
    communication_mainProduct: true
    email: "george@tray.io"
    name: "George"
    password: "George1234"
    role: "Implementation Engineer
}
```

### Test Case Two
#### Type the following values into the relevant fields
- name = George

- role = 

- email = george@tray.io

- password = George

- mainProduct = true

- allProducts = false

#### Output
- Error message on page one should be:
```
Please type in a valid password
```
- No log of the user object should be in the console, as we're unable to progress past page one 

### Test Case Three
#### Type the following values into the relevant fields
- name = George

- role = 

- email = george@tray.io

- password = George1234

- mainProduct = false

- allProducts = true

#### Output
- No error messages on first screen
- console.log should be:
```
{
    communication_allProducts: false
    communication_mainProduct: true
    email: "george@tray.io"
    name: "George"
    password: "George1234"
    role: ""
}
```