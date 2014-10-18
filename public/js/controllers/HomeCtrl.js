(function () {
  /**
   * Home controller
   * @constructor
   */
  var HomeCtrl = function ($scope, myLittleSharedServices) {

    myLittleSharedServices.sayHello("from HomeCtrl")

    myLittleSharedServices.onLoaded(function(component) {
      console.log("=== on loaded ===")
      component.setColor("blue")
    })


    /**
    * Model object for english title
    * @type {{title: string, color: string}}
    */
    $scope.englishModel = {
      title : 'My english title',
      color : 'red'
    };

    /**
    * Model object for german title
    * @type {{title: string, color: string}}
    */
    $scope.germanModel = {
      title : 'My german title',
      color : 'green'
    }
  };

  HomeCtrl.$inject = ["$scope", "myLittleSharedServices"];

  angular.module("mainApp").controller("HomeCtrl", HomeCtrl);


}());