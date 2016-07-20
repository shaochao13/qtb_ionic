angular.module('qtb.routes', [])
.config(function($stateProvider, $urlRouterProvider) {
 

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.market', {
    url: '/market',
    views: {
      'tab-market': {
        templateUrl: 'templates/tab-market.html',
        controller: 'MarketCtrl'
      }
    }
  }) 

  .state('tab.match', {
      url: '/match',
      views: {
        'tab-match': {
          templateUrl: 'templates/tab-match.html',
          controller: 'MatchCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })
.state('tab.trade', {
    url: '/trade',
    views: {
      'tab-trade': {
        templateUrl: 'templates/tab-trade.html',
        controller: 'TradeCtrl'
      }
    }
  })
  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/market');

});