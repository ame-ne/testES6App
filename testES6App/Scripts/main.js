﻿'use strict';

import '@babel/polyfill';
import 'bootstrap/dist/css/bootstrap.min.css';

//import 'bootstrap/dist/css/bootstrap.css';
import TestController from './Controllers/TestController';

let a = () => document.getElementById("helloworld").innerText = "Hello world from script aaa";
a();

window.onload = function () {
    var testCtrl = new TestController();
    let b = TestController.init();
    document.getElementById("helloworld").innerText = b;
};