/* global define */

define({
    appName: 'Your app',
    appDir: 'app',
    libDir: '../lib',
    routes: {
        '/home': {
            location: 'test2/Test2',
            label: 'test'
        },
        '/contacts': {
            location: 'contact/Contact',
            label: 'Contacts'
        },
        '/contacts/:id': {
            location: 'contact/ContactDetail',
            label: 'Contact detail'
        }
    },
    modules: [
        'ng-breadcrumbs',
        'autocomplete',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ],
    defaultRedirect: '/home'
});