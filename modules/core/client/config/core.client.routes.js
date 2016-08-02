'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    // Redirect to 404 when route not found
    $urlRouterProvider.otherwise(function ($injector, $location) {
      $injector.get('$state').transitionTo('not-found', null, {
        location: false
      });
    });

    // Home state routing
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'modules/core/client/views/home.client.view.html'
    })
    .state('AboutUs', {
      url: '/About-Us',
      templateUrl: 'modules/core/client/views/AboutUs.client.view.html'
    })
    .state('test', {
      url: '/test',
      templateUrl: 'modules/core/client/views/test.client.view.html'
    })
    .state('PriceG', {
      url: '/Price-Guide',
      templateUrl: 'modules/core/client/views/PriceGuide.client.view.html'
    })
    .state('contact', {
      url: '/contact-Flux',
      templateUrl: 'modules/core/client/views/contact.client.view.html'
    })
    .state('conditions', {
      url: '/condition-Flux',
      templateUrl: 'modules/core/client/views/conditions.client.view.html'
    })
    .state('Waiting', {
      url: '/Waiting-list-Flux',
      templateUrl: 'modules/core/client/views/waitingList.client.view.html'
    })
    .state('howWorks', {
      url: '/how-it-Works-Flux',
      templateUrl: 'modules/core/client/views/HowWorks.client.view.html'
    })
    .state('FAQ', {
      url: '/faq-Flux',
      templateUrl: 'modules/core/client/views/FAQ.client.view.html'
    })
    .state('investors', {
      url: '/investors-Flux',
      templateUrl: 'modules/core/client/views/investors.client.view.html'
    })
    .state('not-found', {
      url: '/not-found',
      templateUrl: 'modules/core/client/views/404.client.view.html',
      data: {
        ignoreState: true
      }
    })
    .state('bad-request', {
      url: '/bad-request',
      templateUrl: 'modules/core/client/views/400.client.view.html',
      data: {
        ignoreState: true
      }
    })
    .state('forbidden', {
      url: '/forbidden',
      templateUrl: 'modules/core/client/views/403.client.view.html',
      data: {
        ignoreState: true
      }
    });
  }
]);
