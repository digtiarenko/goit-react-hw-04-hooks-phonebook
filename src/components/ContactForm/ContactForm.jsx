import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label className={styles.label}>
            <span>Name</span>
            <input
              className={styles.input}
              onChange={this.handleInput}
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label className={styles.label}>
            <span>Number </span>
            <input
              className={styles.input}
              onChange={this.handleInput}
              value={this.state.number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button className={styles.btn} type="submit">
            {' '}
            Add contact
          </button>
        </form>
      </>
    );
  }
}

export default ContactForm;
