// Polyfills
import 'es6-shim';
import 'es6-promise';
import 'zone.js/lib/browser/zone-microtask';

require('./../node_modules/es7-reflect-metadata/src/global/browser.ts');

// impoting from jquery and Bootstrap
require('script!../node_modules/jquery/dist/jquery.js');
require('../node_modules/bootstrap/dist/js/bootstrap.js');
require('../node_modules/bootstrap/dist/css/bootstrap.css');

import {bootstrap, ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {App} from './app.ts';

document.addEventListener('DOMContentLoaded', function main() {
    bootstrap(App, [
        ...HTTP_PROVIDERS,
        ...ROUTER_PROVIDERS,
    ]).catch(err => console.error(err));
});