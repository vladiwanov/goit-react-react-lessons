import React, { Component } from 'react';
// import s from './TodoEditor.module.css';
import './TodoEditor.scss';

class TodoEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }
  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state.message);
    this.setState({ message: '' });
  };

  render() {
    return (
      <form className="TodoEditor" onSubmit={this.handleSubmit}>
        <textarea
          className="TodoEditor__textarea"
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit" className="TodoEditor__button">
          to Save
        </button>
      </form>
    );
  }
}

export default TodoEditor;
