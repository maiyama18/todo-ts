import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Filter, Todo, toggleTodo } from '../redux/modules/todos';
import { AppState } from '../redux/types';

const actions = { toggleTodo };

interface StateProps {
    visibleTodos: Todo[];
}

type DispatchProps = typeof actions;

const TodoListPresentation = (props: StateProps & DispatchProps) => (
    <div>
        <ul>
            {props.visibleTodos.map((todo) => (
                <li
                    key={todo.id}
                    style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                    onClick={() => props.toggleTodo(todo.id)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    </div>
);

const filterTodos = (todos: Todo[], filter: Filter): Todo[] => {
    switch (filter) {
        case Filter.ALL:
            return todos;
        case Filter.COMPLETED:
            return todos.filter((todo) => todo.completed);
        case Filter.UNCOMPLETED:
            return todos.filter((todo) => !todo.completed);
    }
};

const mapStateToProps = (state: AppState): StateProps => {
    const { todos, filter } = state.todos;

    return {
        visibleTodos: filterTodos(todos, filter),
    };
};
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
    return {
        ...bindActionCreators(actions, dispatch),
    };
};

export const TodoList = connect(mapStateToProps, mapDispatchToProps)(TodoListPresentation);
