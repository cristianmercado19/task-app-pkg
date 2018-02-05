"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/finally");
require("rxjs/add/operator/take");
var AddNewTaskPassiveCotroller = /** @class */ (function () {
    function AddNewTaskPassiveCotroller(taskService) {
        this.taskService = taskService;
        this.MAX_LENGTH_TASK_NAME = 20;
    }
    AddNewTaskPassiveCotroller.prototype.init = function (view) {
        this.view = view;
        this.view.setMaxLenghTaskName(this.MAX_LENGTH_TASK_NAME);
    };
    AddNewTaskPassiveCotroller.prototype.onAddTaskEvent = function () {
        var _this = this;
        this.view.lock();
        var taskName = this.view.getTaskName();
        this.taskService.addNewTask(taskName)
            .finally(function () {
            _this.onAddNewTaskFinish();
        })
            .take(1)
            .subscribe(function (task) {
            _this.newTaskSuccessfulyAdded(task);
        }, function (error) {
            _this.handleErrorOnAddNewTask(error);
        });
    };
    AddNewTaskPassiveCotroller.prototype.onAddNewTaskFinish = function () {
        this.view.unlock();
    };
    AddNewTaskPassiveCotroller.prototype.newTaskSuccessfulyAdded = function (task) {
        this.view.showSuccessfulMessageOnAddNewTask(task.id);
    };
    AddNewTaskPassiveCotroller.prototype.handleErrorOnAddNewTask = function (error) {
        this.view.showErrorMessageOnAddNewTask();
    };
    return AddNewTaskPassiveCotroller;
}());
exports.AddNewTaskPassiveCotroller = AddNewTaskPassiveCotroller;
