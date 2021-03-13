import { Component } from 'react';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    // console.log(event.currentTarget);
    // console.log(event.currentTarget.name);
    // console.log(event.currentTarget.value);

    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);

    this.props.onSubmit(this.state);
    this.formReset();
  };

  formReset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label htmlFor={this.nameInputId} className={s.label}>
          Name
        </label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          className={s.input}
          required
        />

        <label htmlFor={this.numberInputId} className={s.label}>
          Number
        </label>
        <input
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
          className={s.input}
          required
        />

        <button type="submit" className={s.btnSubmit}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
