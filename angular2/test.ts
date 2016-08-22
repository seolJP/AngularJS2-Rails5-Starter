import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
  selector: 'app',
  template: `
    <h1>{{title}}</h1>
    <a>Heroes</a>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class App {
  title = 'Tour of Heroes';
}



