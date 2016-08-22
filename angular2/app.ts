import {ViewEncapsulation, Component} from '@angular/core';
import {CORE_DIRECTIVES}              from '@angular/common';
import {ROUTER_DIRECTIVES}            from '@angular/router';
import { appRouterProviders }         from './app.routes';
 
import {MainComponent} from './components/MainComponent';
 
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.Emulated,
  template: `
    <h4>Welcome Angular2</h4>
    <router-outlet></router-outlet>
  `,
  directives: [
    CORE_DIRECTIVES,
    ROUTER_DIRECTIVES
  ]
})

export class App {
}


