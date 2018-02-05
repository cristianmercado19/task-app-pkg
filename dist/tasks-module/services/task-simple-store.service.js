"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task_state_1 = require("./../mvc/store/task.state");
var TaskSimpleStoreService = /** @class */ (function () {
    function TaskSimpleStoreService() {
        this.state = new task_state_1.TaskState();
        this.listeners = [];
    }
    TaskSimpleStoreService.prototype.getState = function () {
        var copyOfState = Object.assign({}, this.state);
        return copyOfState;
    };
    TaskSimpleStoreService.prototype.subscribe = function (listener) {
        var _this = this;
        this.listeners.push(listener);
        return function () {
            var index = _this.listeners.indexOf(listener);
            _this.listeners.splice(index, 1);
        };
    };
    TaskSimpleStoreService.prototype.addNewTask = function (newTask) {
        this.state.tasks.push(newTask);
        this.notifyListeners();
    };
    TaskSimpleStoreService.prototype.notifyListeners = function () {
        for (var i = 0; i < this.listeners.length; i++) {
            var listener = this.listeners[i];
            listener();
        }
    };
    return TaskSimpleStoreService;
}());
exports.TaskSimpleStoreService = TaskSimpleStoreService;
