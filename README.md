# Winega

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

## Development server

Before run `ng serve` you need to install nodeJS and install all required npm packages by running `npm install` from the command line in the project root folder.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Production link


## Considerations
I used the Angular quickstart project as a base for the application, it's written in TypeScript and uses bootstrap 4 and scss to style.

I decided to create two components separately for reuse.

The path sctructure is as bellow:
    |-app
        -beer (beer component)
        -wine (wine component)
        -model (models to beer and wine class)
        -services (services separately to beer and wine, where I configured services to add and get the bottles)
        -app (app component)
        -in-memory-data (Service to simulate a database, I decided to get it out from the path 'services' to don't forget delete)

