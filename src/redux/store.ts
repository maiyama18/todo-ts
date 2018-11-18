import { combineReducers, createStore } from 'redux';
import { TodosReducer } from './modules/todos';

const rootReducer = combineReducers({
  todos: TodosReducer,
});

export const store = createStore(rootReducer);
