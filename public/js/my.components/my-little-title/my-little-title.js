(function (ng) {

  var scripts = document.getElementsByTagName("script");
  var templateUrl = scripts[scripts.length-1].src.replace(".js", ".html");

  var myLittleTitle = function(myLittleSharedServices) {
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

      },
      controller: "myLittleTitleCtrl",
      scope:{
        id: "@id", default : "@default", color : "@color"
      }
    }

  };

  var myLittleTitleCtrl = function($scope) {


  };

  myLittleTitle.$inject = ["myLittleSharedServices"];
  myLittleTitleCtrl.$inject = ["$scope"];

  ng.module("my.components")
    .directive("myLittleTitle", myLittleTitle)
    .controller("myLittleTitleCtrl", myLittleTitleCtrl);

})(angular);