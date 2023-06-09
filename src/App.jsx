import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import styles from "./App.module.css";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

function initContacts() {
  const contacts = localStorage.getItem("contacts");
  if (contacts) {
    return JSON.parse(contacts);
  } else {
    return [];
  }
}

function App() {
  const [contacts, setContacts] = useState(initContacts);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  function addContact(name, number) {
    const newContact = {
      name: name,
      id: nanoid(),
      number: +number,
    };

    const existingContact = contacts.find(
      (contact) => contact.name === newContact.name
    );

    if (existingContact) {
      alert(existingContact.name + " is already exists!");
      return;
    }

    setContacts((prevContacts) => [newContact, ...prevContacts]);
    console.log(newContact);
  }

  function deleteContact(id) {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  }

  function checkContact(name) {
    setContacts((contact) => {
      if (contact.name === name) {
        alert(contact.name + "is already used");
      }
    });
  }

  const filteredContacts = contacts.filter((contact) => {
    if (contact.name.includes(filter)) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <div className={styles.container}>
      <h2>Phonebook</h2>
      <ContactForm onAddContact={addContact} />
      <h2>Contacts</h2>
      <div className={styles.contactsSection}>
        <Filter onFilterChange={setFilter} filterValue={filter} />
        {filteredContacts.length !== 0 && (
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={deleteContact}
          />
        )}
      </div>
    </div>
  );
}

export default App;
