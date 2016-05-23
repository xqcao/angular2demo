System.register("myclient", ["angular2/core"], function($__export) {
  "use strict";
  var Component,
      View,
      Myclient;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
    }],
    execute: function() {
      Myclient = function() {
        function Myclient() {
          console.info('Myclient Component Mounted Successfully');
        }
        return ($traceurRuntime.createClass)(Myclient, {}, {});
      }();
      $__export("Myclient", Myclient);
      Object.defineProperty(Myclient, "annotations", {get: function() {
          return [new Component({selector: 'myclient'}), new View({templateUrl: 'myclient.html'})];
        }});
    }
  };
});
