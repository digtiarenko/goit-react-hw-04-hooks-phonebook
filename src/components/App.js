import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(window.localStorage.getItem('contacts')) ?? defaultContacts,
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    const { name, number } = data;

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already here`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevState => [newContact, ...prevState]);
  };

  const onChangeFilter = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId),
    );
  };

  const getFilteredContacts = () => {
    const toLowerCaseFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(toLowerCaseFilter),
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div style={{ marginLeft: '30px' }}>
      <h1> Phonebook </h1>
      <ContactForm onSubmit={addContact} />

      <h1> Contacts </h1>
      <Filter onChange={onChangeFilter} value={filter} />
      <ContactList contactList={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export { App };
