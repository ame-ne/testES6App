'use strict';
let instance = null;
export default class TestController {
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