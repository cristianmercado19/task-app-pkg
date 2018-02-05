"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/do");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/take");
var task_model_1 = require("../entities/task.model");
var InMemoryTaskService = /** @class */ (function () {
    function InMemoryTaskService(taskApi, taskStorage) {
        this.taskApi = taskApi;
        this.taskStorage = taskStorage;
    }
    InMemoryTaskService.prototype.getListOfTasks = function () {
        var tasks = [];
        return Observable_1.Observable.of(tasks);
    };
    InMemoryTaskService.prototype.createNewTask = function (id, name) {
        var task = new task_model_1.Task();
        task.id = id;
        task.name = name;
        return task;
    };
    InMemoryTaskService.prototype.addNewTask = function (taskName) {
        var _this = this;
        return this.taskApi.post(taskName)
            .switchMap(function (taskId) {
            var newTask = _this.createNewTask(taskId, taskName);
            _this.taskStorage.addNewTask(newTask);
            return Observable_1.Observable.of(newTask);
        })
            .take(1)
            .finally(function () { });
    };
    return InMemoryTaskService;
}());
exports.InMemoryTaskService = InMemoryTaskService;
