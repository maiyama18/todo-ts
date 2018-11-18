import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { addTodo } from '../redux/modules/todos';

const actions = { addTodo };

interface FormState {
  text: string;
}
type DispatchProps = typeof actions;

class FormRepresentation extends React.Component<DispatchProps, FormState> {
  public state: FormState = {
    text: '',
  };

  public handleChange(text: string) {
    this.setState({
      text,
    });
  }

  public handleSubmit() {
    this.props.addTodo(this.state.text);
    this.setState({
      text: '',
    });
  }

  public render() {
    return (
      <div>
        <input
          type='text'
          value={this.state.text}
          onChange={(e) => this.handleChange(e.target.value)}
        />
        <button onClick={() => this.handleSubmit()}>add</button>
      </div>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    ...bindActionCreators(actions, dispatch),
  };
};

export const Form = connect(mapStateToProps, mapDispatchToProps)(FormRepresentation);
