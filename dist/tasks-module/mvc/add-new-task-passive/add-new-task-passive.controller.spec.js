"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/observable/of");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/throw");
var add_new_task_passive_controller_1 = require("../../../../application/tasks/mvc/add-new-task-passive/add-new-task-passive.controller");
describe('AddNewTaskPassiveCotroller: ', function () {
    var serviceSpy = createAddNewTaskServiceSpy();
    var viewSpy = createAddNewTaskViewSpy();
    var controller;
    it('should be created', function () {
        var taskController = new add_new_task_passive_controller_1.AddNewTaskPassiveCotroller(serviceSpy);
        expect(taskController).not.toBeNull();
    });
    describe('during the "init" method called', function () {
        beforeEach(function () {
            // arrange
            controller = new add_new_task_passive_controller_1.AddNewTaskPassiveCotroller(serviceSpy);
            // act
            controller.init(viewSpy);
        });
        it('setMaxLenghTaskName from the view should be called', function () {
            // act
            controller.init(viewSpy);
            // assert
            expect(viewSpy.setMaxLenghTaskName).toHaveBeenCalled();
        });
    });
    describe('during the "onAddTaskEvent" method called', function () {
        beforeEach(function () {
            // arrange
            controller = new add_new_task_passive_controller_1.AddNewTaskPassiveCotroller(serviceSpy);
            controller.init(viewSpy);
            // act
            controller.onAddTaskEvent();
        });
        it('view."lock" should be called', function () {
            // assert
            expect(viewSpy.lock).toHaveBeenCalled();
        });
        it('view."getTaskName" should be called', function () {
            // assert
            expect(viewSpy.getTaskName).toHaveBeenCalled();
        });
        it('service."addNewTask" should be called', function () {
            // assert
            expect(serviceSpy.addNewTask).toHaveBeenCalled();
        });
        describe('during service."addNewTask"', function () {
            describe('when it is successful', function () {
                it('view."unlock" should be called', function () {
                    // arrange
                    controller = new add_new_task_passive_controller_1.AddNewTaskPassiveCotroller(serviceSpy);
                    controller.init(viewSpy);
                    // act
                    controller.onAddTaskEvent();
                    // assert
                    expect(viewSpy.unlock).toHaveBeenCalled();
                });
                it('view."showSuccessfulMessageOnAddNewTask" should be called', function () {
                    var taskId = 1234;
                    // arrange
                    serviceSpy.addNewTask = jasmine.createSpy('addNewTask').and.callFake(function () {
                        var observable = Observable_1.Observable.of(taskId);
                        return observable;
                    });
                    controller = new add_new_task_passive_controller_1.AddNewTaskPassiveCotroller(serviceSpy);
                    controller.init(viewSpy);
                    // act
                    controller.onAddTaskEvent();
                    expect(viewSpy.showSuccessfulMessageOnAddNewTask).toHaveBeenCalled();
                    expect(viewSpy.showSuccessfulMessageOnAddNewTask).toHaveBeenCalledWith(taskId);
                });
            });
            describe('when it is failed', function () {
                // arrange
                serviceSpy.addNewTask = jasmine.createSpy('addNewTask').and.callFake(function () {
                    return Observable_1.Observable.throw('forced error in the API');
                });
                controller = new add_new_task_passive_controller_1.AddNewTaskPassiveCotroller(serviceSpy);
                controller.init(viewSpy);
                // act
                controller.onAddTaskEvent();
                it('view."unlock" should be called', function () {
                    // assert
                    expect(viewSpy.unlock).toHaveBeenCalled();
                });
                it('view."showErrorMessageOnAddNewTask" should be called', function () {
                    // assert
                    expect(viewSpy.showErrorMessageOnAddNewTask).toHaveBeenCalled();
                });
            });
        });
    });
});
function createAddNewTaskServiceSpy() {
    var spy = jasmine.createSpyObj('AddNewTaskService', ['addNewTask']);
    spy.addNewTask = jasmine.createSpy('addNewTask').and.callFake(function () {
        var observable = Observable_1.Observable.of(1);
        return observable;
    });
    return spy;
}
function createAddNewTaskViewSpy() {
    var spy = jasmine.createSpyObj('AddNewTaskPassiveView', [
        'lock',
        'getTaskName',
        'unlock',
        'showSuccessfulMessageOnAddNewTask',
        'showErrorMessageOnAddNewTask',
        'setMaxLenghTaskName'
    ]);
    return spy;
}
