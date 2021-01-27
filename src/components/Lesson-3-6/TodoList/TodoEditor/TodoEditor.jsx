import React, { Component } from 'react';
// import s from './TodoEditor.module.css';
import './TodoEditor.scss';
import IconButton from '../../IconButton/IconButton';
import { ReactComponent as AddIcon } from '../../IconButton/icons/add.svg';

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
    // console.log(this.state);
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
        {/* <button type="submit" className="TodoEditor__button">to Save</button> */}
        <IconButton type="submit" className="TodoEditor__button">
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton>
      </form>
    );
  }
}

export default TodoEditor;
