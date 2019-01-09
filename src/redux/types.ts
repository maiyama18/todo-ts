import { TodosState } from './modules/todos';

export interface Action<T> {
    type: T;
}

export interface PayloadAction<T, P> {
    type: T;
    payload: P;
}

export interface AppState {
    todos: TodosState;
}
