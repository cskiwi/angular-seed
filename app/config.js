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
        '/pushpin': {
            location: 'pushPin/PushPin',
            label: 'longtest'
        },
        '/paginate': {
            location: 'paginate/paginate',
            label: 'paginate'
        }
    },
    modules: [
        'angularUtils.directives.dirPagination',
        'ui.materialize',
        'ng-breadcrumbs',
        'autocomplete',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ],
    defaultRedirect: '/home'
});