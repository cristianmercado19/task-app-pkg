import { SummaryView } from './summary.view';
import { TaskStoreService } from '../../services/task-store-service';
export declare class SummaryController {
    private taskStoreService;
    private view;
    constructor(taskStoreService: TaskStoreService);
    init(view: SummaryView): void;
    private updateTotalInView();
}
