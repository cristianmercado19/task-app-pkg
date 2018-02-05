"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
require("rxjs/add/operator/delay");
require("rxjs/add/observable/throw");
var TaskApiMock = /** @class */ (function () {
    function TaskApiMock() {
    }
    TaskApiMock.prototype.post = function (name) {
        if (name.toLowerCase() === 'error') {
            return Observable_1.Observable.throw('forced errorin the API');
        }
        else {
            var randomId = new Date().getTime();
            return Observable_1.Observable.of(randomId).delay(2000);
        }
    };
    return TaskApiMock;
}());
exports.TaskApiMock = TaskApiMock;
