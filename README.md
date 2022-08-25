# MyStore Project Overview

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.2.
MyStore is Angular application that allows users to view a list of available products to purchase, add them to a shopping cart, and ultimately complete the checkout process.

## Getting Started

To use these files, simply merge the folders into the root directory of your scaffolded Angular application.

## Project Instructions

#### Project features

This application reflects the same user experience as that of a real-world e-commerce website, including a(n):

- **Product list** page, which displays the available products for the user to choose and add to their cart (in various quantities)
- **Product details** page, which displays more information about any particular product
- **Shopping cart**, which includes the products that the user has added to their cart
- **Checkout form**, which collects information about the user (e.g., name, address, payment details, etc.)
- **Order confirmation page**, which shows the outcome after the user completes the checkout process (i.e., submits the checkout form)

#### Development strategy

1. **Scaffold the project** using the Angular CLI, and install any dependencies.
2. **Generate the product list component**. Having the product list as the "main" page is a great start for your users.
3. **Begin building the component logic and template** What is the function of the product list? What logic is included in the TypeScript component, and how does its HTML template function? Does this component collect any user input? If so, how does information entered by the user relate to properties in the TypeScript component?
4. **Consider the hierarchy of components**. Which other components do you anticipate you'll need to build in this application? Which component(s) should render other components? Which components should represent a parent-child relationship? Feel free to draw out this hierarchy as a chart to help you visualize the relationships between components.
5. **Create the TypeScript model** for products in the app. Any available product should be of this type, rather than an ordinary object.
6. **Generate the service(s)**. Which service(s) make the most sense? For any particular service, what is its function? Hint: You may want to create a service to handle any asynchronous data.
7. **Fetch data** from the API (or included `data.json` file) and render products in your product list.
8. **Generate and create other components**. How do these components interact, if at all, with the component you first created? How can we facilitate sharing information between them?
9. **Create routing** between components. Which components are linked by the router? How is the app routing module set up and configured to make sure the page doesn't reload during navigation?
10. **Ensure that inputs are validated** in the client. For example, your checkout form needs to collect information from the user in order for them to complete the checkout process. How do you ensure that you are collecting accurate information from the user?

## Models

- **Product Model** Defines a product (id: number; name: string; price: number; url: string; description: string;)
- **Cart Model** Defines a cart item (productId: number; name: string; image: string; quantity: number; price: number;)

## Services

#### Product Service

- **getProducts()** return the list of products
- **getProduct(id)** return the product with that id

#### Cart Service

- **addCartItem( cartItem )** Add this cart item to the cart.
- **resetCartItems()** return the cart empty.
- **removeCartItem(cartItem)** remove this cart item from the cart and return the cart.
- **setCartInfo(name, price)** Set cart information with the user name and total price of his cart.
- **getCartInfo()** get cart information with the user name and total price of his cart.
