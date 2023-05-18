import React, { useState } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = ({ onAddContact, value }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddContact(name, number);
    setName("");
    setNumber("");
  }

  return (
    <div className={styles.inputSection}>
      <h3>Name</h3>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onInput={(e) => setName(e.target.value)}
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <h3>Phone Number</h3>
        <input
          value={number}
          onInput={(e) => setNumber(e.target.value)}
          type="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={styles.btnSubmit} type="submit">
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
