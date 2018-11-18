import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Filter } from 'src/redux/modules/todos';
import { changeFilter } from '../redux/modules/todos';
import { AppState } from '../redux/types';

const actions = { changeFilter };
interface StateProps {
  currentFilter: Filter;
}
type DispatchProps = typeof actions;

const FilterSelectPresentation = (props: StateProps & DispatchProps) => (
  <div>
    {Object.keys(Filter).map((key) => Filter[key]).map((filter) => (
      <span key={filter}>
        <a
          href='#'
          style={{ color: filter === props.currentFilter ? 'red' : 'blue' }}
          onClick={() => props.changeFilter(filter)}
        >
          {filter}
        </a>
        {' '}
      </span>
    ))}
  </div>
);

const mapStateToProps = (state: AppState): StateProps => {
  return {
    currentFilter: state.todos.filter,
  };
};
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    ...bindActionCreators(actions, dispatch),
  };
};

export const FilterSelect = connect(mapStateToProps, mapDispatchToProps)(FilterSelectPresentation);
