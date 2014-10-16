(function () {

  var HomeCtrl = function ($rootScope, myLittleSharedServices) {

    //myLittleSharedServices.setColor("green");

    $rootScope.$on('my-title-ready', function(event, data) {

      console.log('my-title-ready', data)

      if (data.id=="english") {
        $rootScope.$broadcast('set-text', {
          id:"english", message:"Hello world!"
        });
      }

      if (data.id=="french") {
        $rootScope.$broadcast('set-text', {
          id:"french", message:"Salut tout le monde!"
        });
      }

      if (data.id=="german") {
        $rootScope.$broadcast('set-text', {
          id:"german", message:"Morgen!"
        });
      }

      if (data.id=="klingon") {
        $rootScope.$broadcast('set-color', {
          id:"klingon", color:"orange"
        });
      }

    });

  };

  HomeCtrl.$inject = ["$rootScope"];

  angular.module("mainApp").controller("HomeCtrl", HomeCtrl);

  //console.log("angular.module('mainApp')", angular.module("mainApp"))
  //console.log("angular.module('my.components')", angular.module("my.components"))

}());