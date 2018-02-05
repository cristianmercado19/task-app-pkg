"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListTasksController = /** @class */ (function () {
    function ListTasksController(taskListService) {
        this.taskListService = taskListService;
    }
    ListTasksController.prototype.init = function (view) {
        var _this = this;
        this.view = view;
        this.taskListService
            .getListOfTasks()
            .subscribe(function (result) {
            _this.view.setTasks(result);
        }, function (error) {
        });
    };
    return ListTasksController;
}());
exports.ListTasksController = ListTasksController;
