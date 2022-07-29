# Frameworks and Architectures for the Web, MSc (Spring 2021)

Exam 2021: The project task is to build a software system for online shopping. The system consists of two main components that function together in the client/server web architecture: 
-	A client-side web application for online shopping.
-	A server-side RESTful web service for online shopping supporting the client-side application.


1.	The client-side web application for online shopping
The client-side web application should enable customers to shop online: browsing through a list of products, viewing product details and selecting desired products to buy. 

1.1.	Functional requirements: 
-	Users can see a list of all products that are offered (15-20 products, for illustration). 
-	Users can browse products using at least two different product categories. 
-	Users can see more details (e.g., full product description) for a specific product in the list.  
-	Users can select and put a desired product in the shopping basket either from the list of products or from the product detail page. 
-	Users can see the content of their basket. 
-	Users can remove a product from their basket. 
-	Users can see on the home page the latest offers like new products or discounts. 
-	Users can use the website without registration, but they can register if they wish. 
-	During registration, users should give their first and family name, and email as well. The entered names and email should be validated by the login form. Users cannot successfully register until the given data are valid. Users can cancel the registration and continue online shopping as unregistered buyers. 
-	If a user is registered, his/her name should be visible on the home and basket pages. 

1.2.	 Non-functional requirements: 
-	The website should be responsive, i.e., adjusting and adapting to any device screen size, whether it is a desktop, a laptop, a tablet, or a mobile phone. 
-	The application should be a single-page application developed in Typescript using React framework. Additional frameworks are allowed to be used (e.g. react-bootstrap, formik, other CSS frameworks, etc.).

2.	The server-side RESTful web service for online shopping
The developed RESTful API should consist of web service operations (endpoints) that support the client-side application: information about the webshop offer and operations on the user’s shopping basket. 
2.1.	Functional requirements: 

The RESTful API should support the following operations:
-	Get most important information about all products that are offered.
-	Get product categories that exist.
-	Get most important information about products for a specific category.
-	Get all details about a specific product.
-	Create a shopping basket for a specific user.
-	Put a product in the basket for a specific user.
-	Remove a product from the basket for a specific user.
-	Get the shopping basket content for a specific user.

2.2.	 Non-functional requirements: 
-	API should be developed in JavaScript or Typescript using Node.js and Express framework.
-	API should use JSON as data format in HTTP messages.
-	Data about products, categories and the shopping basket content should be stored on the web server. The data can be stored in a single file in JSON format or in any other database at will.




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
