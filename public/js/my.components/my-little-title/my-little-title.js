(function (ng) {

  var scripts = document.getElementsByTagName("script");
  var templateUrl = scripts[scripts.length-1].src.replace(".js", ".html");

  var myLittleTitle = function($rootScope, myLittleSharedServices) {
    return {
      restrict: 'E',
      templateUrl: templateUrl,
      link: function(scope, element){



        scope.setText = function(message) {
          scope.title = message;
        };

        scope.setColor = function(color) {
          angular.element(element[0].querySelector("h2")).css("color", color);
        };

        scope.setText(scope.default);
        scope.setColor(scope.color);

        myLittleSharedServices.initialize(scope);
        myLittleSharedServices.sayHello("initialize() ok");

        //$rootScope.$broadcast('my-title-ready', {id: scope.id});
      },
      controller: "myTitleCtrl",
      scope:{
        id: "@id", default : "@default", color : "@color"
      }
    }

  };

  var myLittleTitleCtrl = function($scope) {

    /*
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
    */

  };

  myLittleTitle.$inject = ["$rootScope", "myLittleSharedServices"];
  myLittleTitleCtrl.$inject = ["$scope"];

  ng.module("my.components")
    .directive("myLittleTitle", myLittleTitle)
    .controller("myLittleTitleCtrl", myLittleTitleCtrl);

})(angular);