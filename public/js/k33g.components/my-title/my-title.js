(function (ng) {

//    TODO : get your the template with $templateCache
//    or if yu want to write an HTML file use for exemple grunt with grunt plugin html2js
    var scripts = document.getElementsByTagName("script");
    var templateUrl = scripts[scripts.length - 1].src.replace(".js", ".html");

    var myTitle = function () {
        return {
            restrict: 'EA',
            templateUrl: templateUrl,
            replace : true,
            scope: {
                title: "=",
                color: "="
            }
        }
    };
    myTitle.$inject = [];

    ng.module("k33g.components").directive("myTitle", myTitle);

})(angular);