import { combineReducers, createStore, Reducer } from 'redux';
import { TodosReducer } from './modules/todos';
import { AppState } from './types';

const rootReducer: Reducer<AppState, any> = combineReducers({
    todos: TodosReducer,
});

export const store = createStore(rootReducer);
