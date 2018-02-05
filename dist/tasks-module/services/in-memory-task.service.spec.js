"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var in_memory_task_service_1 = require("./in-memory-task.service");
describe('InMemoryTaskService', function () {
    it('should be created without dependencies', function () {
        var service = new in_memory_task_service_1.InMemoryTaskService();
    });
    it('list of Tasks should be empty after initializatioin', function () {
        var service = new in_memory_task_service_1.InMemoryTaskService();
        // assert
        service.getListOfTasks()
            .subscribe(function (tasks) {
            expect(tasks.length).toBe(0);
        });
    });
});
