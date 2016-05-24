System.register("index", ["angular2/core", "angular2/platform/browser", "myclient", "welcome", "mygithub"], function($__export) {
  "use strict";
  var Component,
      View,
      bootstrap,
      Myclient,
      Welcome,
      Mygithub,
      Main;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
    }, function($__m) {
      bootstrap = $__m.bootstrap;
    }, function($__m) {
      Myclient = $__m.Myclient;
    }, function($__m) {
      Welcome = $__m.Welcome;
    }, function($__m) {
      Mygithub = $__m.Mygithub;
    }],
    execute: function() {
      Main = function() {
        function Main() {}
        return ($traceurRuntime.createClass)(Main, {}, {});
      }();
      Object.defineProperty(Main, "annotations", {get: function() {
          return [new Component({selector: 'main'}), new View({
            directives: [Myclient],
            template: "\n    <myclient></myclient>\n  "
          })];
        }});
      bootstrap(Main);
      bootstrap(Welcome);
      bootstrap(Mygithub);
    }
  };
});
