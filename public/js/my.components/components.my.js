(function (ng) {
  ng.module('my.components',[]).factory("myLittleSharedServices", function () {

    var sharedService = {

      sayHello: function(message) { console.log("sayHello : ", message); },

      onLoaded: function(callback) {
        this.onLoad = callback;
      },

      initialize : function (component) {

        this.component = component;
        this.component.setColor("red")
        if (this.onLoad) this.onLoad(this.component)
      },

      setColor : function (color) {
        this.component.setColor("color")
      }

    };
    return sharedService;
  });
})(angular);