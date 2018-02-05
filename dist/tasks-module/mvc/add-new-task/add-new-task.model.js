"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AddNewTaskViewModel = /** @class */ (function () {
    function AddNewTaskViewModel() {
        this.lock = false;
        this.taskMaxLength = 100000;
        this.errorMessageVisible = false;
        this.successMessageVisible = false;
    }
    AddNewTaskViewModel.prototype.showError = function () {
        this.errorMessageVisible = true;
        this.successMessageVisible = false;
    };
    AddNewTaskViewModel.prototype.showSuccess = function () {
        this.successMessageVisible = true;
        this.errorMessageVisible = false;
    };
    return AddNewTaskViewModel;
}());
exports.AddNewTaskViewModel = AddNewTaskViewModel;
