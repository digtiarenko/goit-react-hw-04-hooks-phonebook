import PropTypes from 'prop-types';
import React from 'react';
// import styles from './ContactList.module.css';
import ContactItem from '../ContactItem';

function ContactList({ contactList, onDelete }) {
  return (
    <>
      <ul>
        {contactList.map(({ number, name, id }) => (
          <ContactItem
            number={number}
            name={name}
            key={id}
            id={id}
            onDeleteContact={onDelete}
          />
        ))}{' '}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
