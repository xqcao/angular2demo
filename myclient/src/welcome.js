import { Component, View} from 'angular2/core';
@Component({
  selector: 'welcome'
  })
@View({
  template: `<p>please type your name :</p>
            <input #nametext>
            <button (click)="addName(nametext.value)">Add</button>
            <p>your input is {{uname}}</p>
            
  `
})

export class Welcome {
    uname: string;
    constructor() {}
    addName(onename: string) {
      this.uname = onename;
      console.log("input is :" + onename);
    }
  }
