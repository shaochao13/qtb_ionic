angular.module('starter.controllers', ['market.controllers','match.controllers','trade.controllers','account.controllers'])

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
});

