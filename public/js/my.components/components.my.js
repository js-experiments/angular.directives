(function (ng) {
  ng.module('my.components',[]).factory("myLittleSharedServices", function () {

    //console.log("component", component)

    var sharedService = {
      sayHello: function() { console.log("Hello from myLittleSharedServices"); },

      initialize : function (component) {
        console.log("component", component)
        this.component = component;
        this.component.setColor("red")
      },

      setColor : function (color) {
        this.component.setColor("color")
      }

    };
    return sharedService;
  });
})(angular);