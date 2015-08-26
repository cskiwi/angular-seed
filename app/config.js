/* global define */

define({
    appName: 'Your app',
    appDir: 'app',
    libDir: '../lib',
    routes: {
        '/home': {
            location: 'home/Home',
            label: 'test'
        },
        '/contacts': {
            location: 'contact/Contact',
            label: 'Contacts'
        },
        '/contacts/:id': {
            location: 'contact/ContactDetail',
            label: 'Contact detail'
        },
    '/test3': {
            location: 'pushPin/PushPin',
            label: 'longtest'
        }
    },
    modules: [
        'ng-breadcrumbs',
        'autocomplete',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'ui.materialize'
    ],
    defaultRedirect: '/home'
});