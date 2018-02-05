import { TaskState } from './../mvc/store/task.state';
import { TaskStoreService, Unsubscribe } from './task-store-service';
import { Task } from '../entities/task.model';
export declare class TaskSimpleStoreService implements TaskStoreService {
    private state;
    private listeners;
    constructor();
    getState(): TaskState;
    subscribe(listener: () => void): Unsubscribe;
    addNewTask(newTask: Task): void;
    private notifyListeners();
}
