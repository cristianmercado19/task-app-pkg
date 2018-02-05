import { ListTaskView } from './list-tasks.view';
import { TaskListService } from '../../services/task-list.service';
export declare class ListTasksController {
    private taskListService;
    private view;
    constructor(taskListService: TaskListService);
    init(view: ListTaskView): void;
}
