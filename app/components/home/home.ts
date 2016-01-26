import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

@Component({
    selector: 'home',
    directives: [
    ],
    template: require('./home.html')
})
export class Home {
    constructor() {

    }

    ngOnInit() {
        console.log('hello `Home` component');
    }
}