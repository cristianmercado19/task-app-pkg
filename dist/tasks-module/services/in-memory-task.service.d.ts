import { AddNewTaskService } from './add-new-task-service';
import { IAddNewTaskApi } from '../api/add-new-task.api';
import { TaskListService } from './task-list.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';
import { Task } from '../entities/task.model';
import { TaskStoreService } from './task-store-service';
export declare class InMemoryTaskService implements AddNewTaskService, TaskListService {
    private taskApi;
    private taskStorage;
    getListOfTasks(): Observable<Array<Task>>;
    constructor(taskApi: IAddNewTaskApi, taskStorage: TaskStoreService);
    private createNewTask(id, name);
    addNewTask(taskName: string): Observable<Task>;
}
