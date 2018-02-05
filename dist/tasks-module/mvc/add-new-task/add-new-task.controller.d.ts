import { AddNewTaskView } from './add-new-task.view';
import { AddNewTaskService } from '../../services/add-new-task-service';
import 'rxjs/add/operator/finally';
export declare class AddNewTaskController {
    private taskService;
    private readonly MAX_LENGTH_TASK_NAME;
    private view;
    private viewModel;
    constructor(taskService: AddNewTaskService);
    init(view: AddNewTaskView): void;
    private initializeView();
    onAddTaskEvent(): void;
    private onAddNewTaskFinish();
    private initializeViewModel();
    private newTaskSuccessfulyAdded(taskId);
    private handleErrorOnAddNewTask(error);
}
