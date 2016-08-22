import { provideRouter, RouterConfig }  from '@angular/router';
import { MainComponent }                from './components/MainComponent';

const routes: RouterConfig = [
  {
    path: 'home/index', component: MainComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
