(function (ng) {

  var scripts = document.getElementsByTagName("script");
  var templateUrl = scripts[scripts.length-1].src.replace(".js", ".html");

  var myTitle = function($rootScope) {
    return {
      restrict: 'E',
      templateUrl: templateUrl,
      link: function(scope, element){

        //scope.self = element[0];

        scope.setText = function(message) {
          scope.title = message;
        };

        scope.setColor = function(color) {
          angular.element(element[0].querySelector("h1")).css("color", color);
        };

        scope.setText(scope.default);
        scope.setColor(scope.color);

        $rootScope.$broadcast('my-title-ready', {id: scope.id});
      },
      controller: "myTitleCtrl",
      scope:{
        id: "@id", default : "@default", color : "@color"
      }
    }

  };

  var myTitleCtrl = function($scope, $rootScope) {

    $rootScope.$on('set-text', function(event, data) {
      if(data.id == $scope.id) {
        $scope.setText(data.message);
      }
    });

    $rootScope.$on('set-color', function(event, data) {
      if(data.id == $scope.id) {
        $scope.setColor(data.color);
      }
    });

  };

  myTitle.$inject = ["$rootScope"];
  myTitleCtrl.$inject = ["$scope", "$rootScope"];

  ng.module("k33g.components")
    .directive("myTitle", myTitle)
    .controller("myTitleCtrl", myTitleCtrl);

})(angular);