import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

@Component({
    selector: 'formular',
    directives: [
    ],
    template: require('./formular.html')
})
export class Formular {
    constructor() {

    }

    ngOnInit() {
        console.log('hello `Home` component');
    }
}