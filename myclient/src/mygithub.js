import { Component, View, Injectable} from 'angular2/core';

//import { Http, Response} from 'angular/http'
//when running this, the http.js not found, so cann't

@Component({
  selector: 'mygithub'
  })
@View({
  template: `
    <p>my github list</p>
  button 1 :  <button (click)="allGit()">git List</button>
  <ul>
    <li *ngFor="#item of repos">{{item}}</li>
  </ul>
  button 2 :  <button (click)="allAlist()">Array List</button><br/>
  <ul>
    <li *ngFor="#item of repos2">{{item}}</li>
  </ul>
  
  `
})


@Injectable()
export class Mygithub {
    repos: string;
    repos2: string[];
    // constructor(http: Http) {
    //   this.http = http;
    // }
    //
    // allGit() {
    //   this.repos = this.http.get('https://api.github.com/users/xqcao/repos')
    //     .map(res => JSON.stringify(res));
    // }
    //
    allAlist() {
      this.repos2 = ['one', 'two', 'three'];
    }

  }
