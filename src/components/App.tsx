import * as React from 'react';
import { FilterSelect } from './FilterSelect';
import { Form } from './Form';
import { TodoList } from './TodoList';

export const App = () => (
  <div>
    <Form />
    <FilterSelect />
    <TodoList />
  </div>
);
