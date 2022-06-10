import styles from './ContactItem.module.css';

import PropTypes from 'prop-types';

const ContactItem = ({ id, number, name, onDeleteContact }) => {
  return (
    <li key={id} className={styles.listUnit}>
      <span className={styles.span}>
        {name}: {number}
      </span>
      <button
        onClick={() => {
          onDeleteContact(id);
        }}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
