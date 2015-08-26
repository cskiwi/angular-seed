/* global define */

define({
    appName: 'Your app',
    appDir: 'app',
    libDir: '../lib',
    routes: {
        '/contact': {
            location: 'contact/Contact',
            label: 'Contacts'
        },
        '/contact/:id': {
            location: 'contact/ContactDetail',
            label: 'Contact detail'
        }
    },
    modules: [
        'ng-breadcrumbs',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ],
    defaultRedirect: '/contact'
});