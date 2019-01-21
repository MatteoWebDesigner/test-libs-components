'use strict';

class Alert {
    constructor() {
        console.log('Alert');
    }
}

var style = {"test":"Button_test__-AYPH"};

class Button {
    constructor() {
        console.log('Button', style.test);
    }
}

var index = { Alert, Button };

module.exports = index;
