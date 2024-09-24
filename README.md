# Authfront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.10.


When cloning the project, run the command: `npm start`, this way it will run the fake server along with the application.

the application is available on github pages, however the fake server does not work, you will encounter an error when trying to access it, this is normal.

# Short read about the application

This application is a login system, where a token is generated using JWT, it is validated and if it is not expired, you will be directed to a "login successful" screen, the token is stored in local storage, I used the library: "@auth0/angular-jwt" to perform validation, the page has guards, thus preventing access to routes where the user is not authorized. When cloning, access will be done with the following user: admin@admin.com and the password is 123.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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
