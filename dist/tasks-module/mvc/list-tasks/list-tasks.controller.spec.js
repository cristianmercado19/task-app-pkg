"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_tasks_controller_1 = require("../../../../application/tasks/mvc/list-tasks/list-tasks.controller");
var task_model_1 = require("../../../../application/tasks/entities/task.model");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
describe('ListTasksController', function () {
    var taskListServiceSpy;
    var viewSpy;
    function createTaskListServiceSpy() {
        var spy = jasmine.createSpyObj('TaskListService', ['getListOfTasks']);
        spy.getListOfTasks = jasmine.createSpy('getListOfTasks').and.callFake(function () {
            return Observable_1.Observable.of([]);
        });
        return spy;
    }
    function createTaskListViewSpy() {
        var spy = jasmine.createSpyObj('TaskListView', ['setTasks']);
        return spy;
    }
    beforeEach(function () {
        taskListServiceSpy = createTaskListServiceSpy();
        viewSpy = createTaskListViewSpy();
    });
    it('depends on a TaskService', function () {
        // act
        var controller = new list_tasks_controller_1.ListTasksController(taskListServiceSpy);
    });
    it('initialize a view', function () {
        // arrange
        var controller = new list_tasks_controller_1.ListTasksController(taskListServiceSpy);
        // act
        controller.init(viewSpy);
    });
    describe('during the "init" process', function () {
        it('getListOfTasks from TaskListService should be called', function () {
            // act
            var controller = new list_tasks_controller_1.ListTasksController(taskListServiceSpy);
            controller.init(viewSpy);
            // assert
            expect(taskListServiceSpy.getListOfTasks).toHaveBeenCalled();
        });
        it('setTasks from TaskListView should be called', function () {
            // arrange
            var tasks = new MockTasks().getListOfTasks();
            taskListServiceSpy.getListOfTasks = jasmine.createSpy('getListOfTasks').and.callFake(function () {
                return Observable_1.Observable.of(tasks);
            });
            var controller = new list_tasks_controller_1.ListTasksController(taskListServiceSpy);
            // act
            controller.init(viewSpy);
            // assert
            expect(viewSpy.setTasks).toHaveBeenCalled();
            expect(viewSpy.setTasks).toHaveBeenCalledWith(tasks);
        });
    });
});
var MockTasks = /** @class */ (function () {
    function MockTasks() {
    }
    MockTasks.prototype.getListOfTasks = function () {
        var tasks = [];
        var taskA = new task_model_1.Task();
        taskA.id = 1;
        taskA.name = 'taskA';
        tasks.push(taskA);
        var taskB = new task_model_1.Task();
        taskB.id = 1;
        taskB.name = 'taskB';
        tasks.push(taskB);
        return tasks;
    };
    return MockTasks;
}());
