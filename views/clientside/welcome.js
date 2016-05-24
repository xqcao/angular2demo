System.register("welcome", ["angular2/core"], function($__export) {
  "use strict";
  var Component,
      View,
      Welcome;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
    }],
    execute: function() {
      Welcome = function() {
        function Welcome() {}
        return ($traceurRuntime.createClass)(Welcome, {addName: function(onename) {
            this.uname = onename;
            console.log("input is :" + onename);
          }}, {});
      }();
      $__export("Welcome", Welcome);
      Object.defineProperty(Welcome, "annotations", {get: function() {
          return [new Component({selector: 'welcome'}), new View({template: "<p>please type your name :</p>\n            <input #nametext>\n            <button (click)=\"addName(nametext.value)\">Add</button>\n            <p>your input is {{uname}}</p>\n            \n  "})];
        }});
      Object.defineProperty(Welcome.prototype.addName, "parameters", {get: function() {
          return [[$traceurRuntime.type.string]];
        }});
    }
  };
});
