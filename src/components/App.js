import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  ContactFormHandler = data => {
    const { name, number } = data;

    if (this.state.contacts.find(contact => contact.name === name)) {
      alert(`${name} is already here`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prevState => {
      return {
        contacts: [newContact, ...prevState.contacts],
      };
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId,
        ),
      };
    });
  };

  onChangeFilter = event => {
    const { value } = event.target;
    this.setState({ filter: value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const toLowerCaseFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(toLowerCaseFilter),
    );
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div style={{ marginLeft: '30px' }}>
        <h1> Phonebook </h1>
        <ContactForm onSubmit={this.ContactFormHandler} />
        <h1> Contacts </h1>
        <Filter onChange={this.onChangeFilter} value={filter} />
        <ContactList
          contactList={filteredContacts}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}

export { App };
