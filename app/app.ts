import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import {Home} from './components/home/home.ts';
import {Formular} from './components/formular/formular.ts';

@Component({
    selector: 'app',
    directives: [ ...ROUTER_DIRECTIVES ],
    template: require( './app.html' )
})
@RouteConfig([
    { path: '/', component: Home, name: 'Index' },
    { path: '/home', component: Home, name: 'Home' },
    { path: '/form', component: Formular, name: 'Form' }
])
export class App {
    name:string = 'Webpack Angular2';
    constructor() {
    }
}