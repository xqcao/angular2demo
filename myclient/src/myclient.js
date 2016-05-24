import { Component, View} from 'angular2/core';

@Component({
  selector: 'myclient'
  })

@View({
  templateUrl: 'myclient.html'
})

export class Myclient {

    constructor() {
      console.info('Myclient Component Mounted Successfully');
    }

  }
