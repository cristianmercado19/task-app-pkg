"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListController = /** @class */ (function () {
    function ListController(taskStoreService) {
        var _this = this;
        this.taskStoreService = taskStoreService;
        this.taskStoreService.subscribe(function () { return _this.updateListInView(); });
    }
    ListController.prototype.init = function (view) {
        this.view = view;
        this.updateListInView();
    };
    ListController.prototype.updateListInView = function () {
        var taskState = this.taskStoreService.getState();
        this.view.updateList(taskState.tasks);
    };
    return ListController;
}());
exports.ListController = ListController;
