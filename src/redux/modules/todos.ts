import { Reducer } from 'redux';
import * as uuid from 'uuid/v4';
import { PayloadedAction } from '../types';

export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

export enum Filter {
    ALL = 'ALL',
    COMPLETED = 'COMPLETED',
    UNCOMPLETED = 'UNCOMPLETED',
}

export interface TodosState {
    todos: Todo[];
    filter: Filter;
}

export const todosInitialState: TodosState = {
    todos: [],
    filter: Filter.ALL,
};

export type TodosAction =
    | PayloadedAction<'ADD_TODO', { title: string }>
    | PayloadedAction<'TOGGLE_TODO', { id: string }>
    | PayloadedAction<'CHANGE_FILTER', { filter: Filter }>;

export const addTodo = (title: string): TodosAction => ({
    type: 'ADD_TODO',
    payload: { title },
});
export const toggleTodo = (id: string): TodosAction => ({
    type: 'TOGGLE_TODO',
    payload: { id },
});
export const changeFilter = (filter: Filter): TodosAction => ({
    type: 'CHANGE_FILTER',
    payload: { filter },
});

export const TodosReducer: Reducer<TodosState, TodosAction> = (
    state = todosInitialState, action: TodosAction,
): TodosState => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    { id: uuid(), title: action.payload.title, completed: false },
                ],
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map((todo) => (todo.id !== action.payload.id) ? todo : {
                    ...todo,
                    completed: !todo.completed,
                }),
            };
        case 'CHANGE_FILTER':
            return {
                ...state,
                filter: action.payload.filter,
            };
        default:
            return state;
    }
};
