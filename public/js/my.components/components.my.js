(function (ng) {
  ng.module('my.components',[]).factory("myLittleSharedServices", function () {

    //console.log("component", component)

    var sharedService = {
      sayHello: function(message) { console.log("sayHello : ", message); },

      onLoaded: function(callback) {
        console.log("onloaded set")
        this.onLoad = callback;
      },

      initialize : function (component) {
        console.log("component", component)
        this.component = component;
        this.component.setColor("red")
        this.onLoad((this.component))
      },

      setColor : function (color) {
        this.component.setColor("color")
      }

    };
    return sharedService;
  });
})(angular);