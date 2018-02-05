import { AddNewTaskService } from '../../services/add-new-task-service';
import { AddNewTaskPassiveView } from './add-new-task-passive.view';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/take';
export declare class AddNewTaskPassiveCotroller {
    private taskService;
    private readonly MAX_LENGTH_TASK_NAME;
    private view;
    constructor(taskService: AddNewTaskService);
    init(view: AddNewTaskPassiveView): void;
    onAddTaskEvent(): void;
    private onAddNewTaskFinish();
    private newTaskSuccessfulyAdded(task);
    private handleErrorOnAddNewTask(error);
}
