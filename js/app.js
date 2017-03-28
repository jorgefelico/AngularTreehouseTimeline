// Create initial angular app
var app = angular.module('TreehouseTimeline', ['ngAnimate']);

// Create factory for communicating with API
app.factory('ProfileFactory', function($http){
  var factory = {};

  factory.getProfile = function(username){
    return $http.get('https://teamtreehouse.com/' + username + '.json');
  };

  return factory;
});

// Define our directives
app.directive('profileInput', function(){
  return {
    restrict: 'E',
    templateUrl: 'profile-input.html'
  }
});

app.directive('profileView', function(){
  return {
    restrict: 'E',
    templateUrl: 'profile-view.html'
  }
});

// Create our profile controller
app.controller('profile', function($scope, ProfileFactory){
  $scope.gotData = false;
  $scope.profileData = {};

  $scope.getProfile = function(){
    ProfileFactory.getProfile($scope.username).then(function(response){
      $scope.profileData = {};
      $scope.gotData = true;
      $scope.profileData = response.data;

    }, function(response){
      console.log(response.toString());
    });
  }

});
