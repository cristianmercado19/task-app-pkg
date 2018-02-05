"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SummaryController = /** @class */ (function () {
    function SummaryController(taskStoreService) {
        var _this = this;
        this.taskStoreService = taskStoreService;
        this.taskStoreService.subscribe(function () { return _this.updateTotalInView(); });
    }
    SummaryController.prototype.init = function (view) {
        this.view = view;
        this.updateTotalInView();
    };
    SummaryController.prototype.updateTotalInView = function () {
        var taskState = this.taskStoreService.getState();
        var total = taskState.tasks.length;
        this.view.setTotalCount(total);
    };
    return SummaryController;
}());
exports.SummaryController = SummaryController;
