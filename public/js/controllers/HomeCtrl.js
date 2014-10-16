(function () {

  var HomeCtrl = function ($rootScope, myLittleSharedServices) {

    console.log(myLittleSharedServices);

    myLittleSharedServices.sayHello("from HomeCtrl")

    myLittleSharedServices.onLoaded(function(component) {
      console.log("=== on loaded ===")
      component.setColor("blue")
    })



    /* pas beau */
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

  HomeCtrl.$inject = ["$rootScope","myLittleSharedServices"];

  angular.module("mainApp").controller("HomeCtrl", HomeCtrl);

}());