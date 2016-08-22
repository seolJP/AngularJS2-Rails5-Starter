import 'reflect-metadata';
import '../node_modules/zone.js/dist/zone.js'
import {bootstrap}            from '@angular/platform-browser-dynamic';
import {provide}              from '@angular/core';
import {App}                  from './app';
import { appRouterProviders } from './app.routes';
 
window.addEventListener("load", (e) => {
  bootstrap(App, [
    appRouterProviders
  ]);
});
