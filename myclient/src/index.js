import { Component, View} from 'angular2/core';
import { bootstrap} from 'angular2/platform/browser';
import { Myclient} from 'myclient';

import { Welcome} from 'welcome';

import { Mygithub} from 'mygithub';

@Component({
  selector: 'main'
  })

@View({
  directives: [Myclient],
  template: `
    <myclient></myclient>
  `
})

class Main {

  }

  bootstrap(Main);

  bootstrap(Welcome);

  bootstrap(Mygithub);
