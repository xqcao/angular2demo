System.register("mygithub", ["angular2/core"], function($__export) {
  "use strict";
  var Component,
      View,
      Injectable,
      Mygithub;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
      Injectable = $__m.Injectable;
    }],
    execute: function() {
      Mygithub = function() {
        function Mygithub() {}
        return ($traceurRuntime.createClass)(Mygithub, {allAlist: function() {
            this.repos2 = ['one', 'two', 'three'];
          }}, {});
      }();
      $__export("Mygithub", Mygithub);
      Object.defineProperty(Mygithub, "annotations", {get: function() {
          return [new Component({selector: 'mygithub'}), new View({template: "\n    <p>my github list</p>\n  button 1 :  <button (click)=\"allGit()\">git List</button>\n  <ul>\n    <li *ngFor=\"#item of repos\">{{item}}</li>\n  </ul>\n  button 2 :  <button (click)=\"allAlist()\">Array List</button><br/>\n  <ul>\n    <li *ngFor=\"#item of repos2\">{{item}}</li>\n  </ul>\n  \n  "}), new Injectable()];
        }});
    }
  };
});
