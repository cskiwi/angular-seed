Angular template
===============================

This project is an application skeleton for an ideal AngularJS web app. You can use it with a minimal configuration to easily bootstrap your angular projects.

The seed contains the AngularJS and RequireJS libraries, and a clean directory structure for your app. Just clone the repo (or download the zip/tarball), start up a web server and you are ready to develop with a minimum effort.

The sample app in this seed doesn't do much, just shows how to hook up couple of controllers and views together. You can check it out by opening index.html in your browser (using a local web server of course!)


Directory Structure
-------------------

The directory structure is flexible. It doesn't have to be in the following structure. You can always change it from `config.js`.

	root
	|
	|
	├── app
	|   |
	|   ├── controllers
	|   ├── directives
	|   ├── filters
	|   ├── services
	|   ├── views
	|   |
	|   ├── config.js
	|   └── main.js
	|
	├── lib
	|   |
	|   ├── Libraries
	|   ├── ng-app.js
	|   └── require.js
	|
	└── index.html


Configuration
-------------

* Step 1 - For each application, copy the `app` directory and place it where you like.
* Step 2 - Rename the directory.
* Step 3 - Open up `config.js`, and modify it to match your app configuration:

````javascript
define({
    appName: 'YourAppName',
    appDir: 'app', // don't touch this
    libDir: '../lib', // don't touch this
    routes: {
        '/path': {
            location: 'subdirController1',
            label: 'Label'
        },
        '/path/with/:id': {
            location: 'subdir/Controller1',
            label: 'yet Other Label'
        },
        '/more/with': {
            location: 'Controller1'
            label: 'last label'
        }        
    },
    modules: [
        'ng-breadcrumbs',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ],
    defaultRedirect: '/'
});
````
Notice that, the controllers and views can be organized by placing them under sub-directories. But it still works, if you wish to place them directly under the `controllers` and `views` directories.


Seed Project : PhoneBook App
----------------------------

The seed example project included in this seed has two controllers (`Contact` and `ContactDetail`) and one service (`contactService`). The purpose is simply retrieving data from a model and populate the view accordingly.


Inspired by
-----------

- [Dynamically Loading Controllers and Views with AngularJS and RequireJS](http://weblogs.asp.net/dwahlin/archive/2013/05/22/dynamically-loading-controllers-and-views-with-angularjs-and-requirejs.aspx)
- [Angular RequireJS Seed](https://github.com/tnajdek/angular-requirejs-seed)
- [Angular seed](https://github.com/mohislm/angular-seed)
