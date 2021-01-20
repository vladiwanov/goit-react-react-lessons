import React, { Component } from 'react';
import s from './Form.module.css';
import shortid from 'shortid'; //https://www.npmjs.com/package/shortid

class Form extends Component {
  //  { onSubmitHandler } = onSubmit;

  state = {
    name: '',
    tag: '',
    experience: 'junior',
    licence: false,
  };

  nameInputId = shortid.generate();
  tagInputId = shortid.generate();

  handLicenseChange = e => {
    console.log(e.currentTarget.checked);
    this.setState({ licence: e.currentTarget.checked });
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.resetForm();
  };
  resetForm = () => {
    this.setState({ name: '', tag: '' });
  };

  render() {
    return (
      <form className={s.main} onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Firstname:
          <input
            className={s.input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>
        <label htmlFor={this.tagInputId}>
          Lastname:
          <input
            className={s.input}
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
            id={this.tagInputId}
          />
        </label>
        <p>Development Level: </p>
        <input
          className={s.radio}
          type="radio"
          name="experience"
          value="junior"
          checked={this.state.experience === 'junior'}
          onChange={this.handleChange}
        />{' '}
        junior
        <input
          className={s.radio}
          type="radio"
          name="experience"
          value="middle"
          checked={this.state.experience === 'middle'}
          onChange={this.handleChange}
        />{' '}
        Middle
        <input
          className={s.radio}
          type="radio"
          name="experience"
          value="senior"
          checked={this.state.experience === 'senior'}
          onChange={this.handleChange}
        />{' '}
        Senior
        <label>
          <input
            className={s.checkbox}
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handLicenseChange}
          />{' '}
          Agree with Conditionals (Submit button appears after "checked")
        </label>
        <button
          className={s.button}
          type="submit"
          disabled={!this.state.licence}
        >
          Submit
        </button>
      </form>
    );
  }
}
export default Form;
