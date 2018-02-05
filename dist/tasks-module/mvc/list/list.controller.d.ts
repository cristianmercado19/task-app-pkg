import { TaskStoreService } from '../../services/task-store-service';
import { ListView } from './list.view';
export declare class ListController {
    private taskStoreService;
    private view;
    constructor(taskStoreService: TaskStoreService);
    init(view: ListView): void;
    private updateListInView();
}
