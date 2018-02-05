"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var add_new_task_model_1 = require("./add-new-task.model");
require("rxjs/add/operator/finally");
var AddNewTaskController = /** @class */ (function () {
    function AddNewTaskController(taskService) {
        this.taskService = taskService;
        this.MAX_LENGTH_TASK_NAME = 20;
    }
    AddNewTaskController.prototype.init = function (view) {
        this.view = view;
        this.initializeViewModel();
        this.initializeView();
    };
    AddNewTaskController.prototype.initializeView = function () {
        this.view.setViewModel(this.viewModel);
        this.view.cleanMessages();
    };
    AddNewTaskController.prototype.onAddTaskEvent = function () {
        var _this = this;
        this.viewModel.lock = true;
        this.view.cleanMessages();
        var taskName = this.viewModel.taskName;
        this.taskService.addNewTask(taskName)
            .finally(function () {
            _this.onAddNewTaskFinish();
        })
            .subscribe(function (task) {
            _this.newTaskSuccessfulyAdded(task.id);
        }, function (error) {
            _this.handleErrorOnAddNewTask(error);
        });
    };
    AddNewTaskController.prototype.onAddNewTaskFinish = function () {
        this.viewModel.lock = false;
    };
    AddNewTaskController.prototype.initializeViewModel = function () {
        this.viewModel = new add_new_task_model_1.AddNewTaskViewModel();
        this.viewModel.lock = false;
        this.viewModel.taskName = '';
        this.viewModel.taskMaxLength = this.MAX_LENGTH_TASK_NAME;
        this.viewModel.errorMessageVisible = false;
        this.viewModel.successMessageVisible = false;
    };
    AddNewTaskController.prototype.newTaskSuccessfulyAdded = function (taskId) {
        this.view.cleanMessages();
        this.viewModel.taskName = '';
        this.viewModel.showSuccess();
        this.view.showTaskAddedSuccessfulyMessage(taskId);
    };
    AddNewTaskController.prototype.handleErrorOnAddNewTask = function (error) {
        this.viewModel.showError();
        this.view.showServiceIsUnavailableErrorMessage();
    };
    return AddNewTaskController;
}());
exports.AddNewTaskController = AddNewTaskController;
