'use strict';
import '@babel/polyfill';
let instance = null;
class TestController {
    constructor() {
        if (instance) {
            return instance;
        }
        this.instance = this;
    }

    static init() {
        return 'from controller';
    }
}

export default TestController;