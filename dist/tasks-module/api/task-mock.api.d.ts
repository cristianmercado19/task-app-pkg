import { IAddNewTaskApi } from './add-new-task.api';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/throw';
export declare class TaskApiMock implements IAddNewTaskApi {
    post(name: string): Observable<number>;
}
