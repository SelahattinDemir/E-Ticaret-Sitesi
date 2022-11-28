<h1 align="center">Angular E-commerce Web Application</h1>



<h3 align="center">Languages and Tools:</h3>
<p align="center"> <a href="https://angular.io" target="_blank" rel="noreferrer"> <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="40" height="40"/> </a> <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a></a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a>


# ETicaretSitesi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

## Contents:
 - [Categories](#categories)
      - [Getting Started](#getting-started)
      - [About Project](#about-project)
      - [Used Packages And Modules](#used-packages-and-modules)
      - [Signup](#signup)
      - [Login](#login)
      - [Products](#products)
      - [Products Detail](#products-detail)
      - [Basket](#basket)
      - [My Orders](#my-orders)
      - [Admin Dashboard](#admin-dashboard)
      - [Add Product](#add-product)
      - [Edit Product](#edit-product)
      - [Unsaved Changes](#unsaved-changes)
      - [Prerequisites](#prerequisites)

## Getting Started

:rocket: Run `npm i or npm install` to install all packages then install start fake server json api with `npm install -g json-server`then start server `json-server --watch db.json` then finally for compling and starting page `ng serve --o`.

## About Project

This project is an e-commerce site made with Angular.js. When you enter the site, the first login page welcomes you. You cannot access the site without a login. So you have to register first. Sign up and login pages Reactive form approach used, validation management was carried out in form transactions and a user-friendly warning message should be generated. After logging in, you are first greeted by the home page. There are products on the main page and filtering is done. You can also go to the product detail and basket page. You can also add products to the cart. On this page, we keep our products on json server. We use HttpClient Module to pull data from json server. On our product detail page, we see the product's bigger picture, full description, keywords and comments. You can also comment. According to the number of products added to our basket page, the account is processed. At the same time, you can delete the product you do not want to receive. If you press the payment button in the basket, an alert will appear that your payment has been made. We perform alert operations with Ngx Toastr. If you do not have any products in the basket, only the empty basket note and the a buy now button are displayed on the page. When the payment is made on the cart page, you go to the my orders page. On the My orders page, there are your randomly assigned order number, the picture of the product you bought, its quantity, price and a note that your order has been received.
If there is no product on the My Orders page, only the note that you do not have an order and a buy now button will appear on the page. Angular Metarials. If you want to add a product to the table, you must press the add product button at the top left. A modal appears when the button is pressed. The modal contains the product information that needs to be filled and the user is guided in case of any error. It also gives you the opportunity to correct and delete previous products. 


## Used Packages And Modules

- AppRouting Module
- HttpClient Module
- FormsModule
- ReactiveForms Module
- Bootstrap Icons
- Bootstrap 5
- Angular Metarials Modules
- Ngx Toastr Module
- AuthGuard
- Interceptor Modules

## Signup

![alt text](https://github.com/Selahaddin64/E-Ticaret-Sitesi/blob/master/src/Images/signup.gif)

## Login

![alt text](https://github.com/Selahaddin64/E-Ticaret-Sitesi/blob/master/src/Images/login.gif)

## Products

![alt text](https://github.com/Selahaddin64/E-Ticaret-Sitesi/blob/master/src/Images/products.gif)

## Products Detail

![alt text](https://github.com/Selahaddin64/E-Ticaret-Sitesi/blob/master/src/Images/detail.gif)

## Basket

![alt text](https://github.com/Selahaddin64/E-Ticaret-Sitesi/blob/master/src/Images/basket.gif)

## My Orders

![alt text](https://github.com/Selahaddin64/E-Ticaret-Sitesi/blob/master/src/Images/orders.gif)

## Admin Dashboard

![alt text](https://github.com/Selahaddin64/E-Ticaret-Sitesi/blob/master/src/Images/dashboard.gif)

## Add Product

![alt text](https://github.com/Selahaddin64/E-Ticaret-Sitesi/blob/master/src/Images/modal.gif)

## Edit Product

![alt text](https://github.com/Selahaddin64/E-Ticaret-Sitesi/blob/master/src/Images/edit.gif)

## Unsaved Changes

![alt text](https://github.com/Selahaddin64/E-Ticaret-Sitesi/blob/master/src/Images/unsavedChanges.gif)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Prerequisites
- JSON Api
- npm
- Angular 13
- Bootstrap 5
- VS Code
- Angular Metarial
