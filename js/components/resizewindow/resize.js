/// <reference path="../../_references.ts"/>
/// <reference path="../../services/dataService"/>
var MorfologiApp;
(function (MorfologiApp) {
    var Directives;
    (function (Directives) {
        "use strict";
        var ResizeController = (function () {
            function ResizeController(dataService, $window) {
                this.dataService = dataService;
                this.$window = $window;
            }
            ;
            ResizeController.$inject = ["DataService", "$window"];
            return ResizeController;
        }());
        function linker(scope, element, ctrl) {
            var w = angular.element(ctrl.$window);
            scope.getWindowDimensions = function () {
                return {
                    "VIEW_HEIGHT": element.prop("offsetHeight"),
                    "VIEW_WIDTH": element.prop("offsetWidth")
                };
            };
            scope.$watch(scope.getWindowDimensions, function (newValue) {
                ctrl.dataService.setResizableDivSize(newValue);
            }, true);
            w.bind("resize", function () {
                scope.$apply();
            });
            ctrl.dataService.setResizableDivSize(scope.getWindowDimensions());
        }
        function ispResize() {
            return {
                restrict: "A",
                controller: ResizeController,
                link: linker
            };
        }
        Directives.ispResize = ispResize;
    })(Directives = MorfologiApp.Directives || (MorfologiApp.Directives = {}));
})(MorfologiApp || (MorfologiApp = {}));
//# sourceMappingURL=resize.js.map