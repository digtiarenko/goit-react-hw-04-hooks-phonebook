import PropTypes from 'prop-types';
import styles from '../ContactForm/ContactForm.module.css';

export default function Filter({ onChange, value }) {
  return (
    <div className={styles.form}>
      <label className={styles.label}>
        <span>Find contacts by name</span>
        <input
          className={styles.input}
          onChange={onChange}
          type="text"
          name="name"
          value={value}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};
