import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import styles from "./App.module.css";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  addContactAction,
  deleteContactAction,
} from "./redux/contacts/contactsAction";

import axios from "axios";
import { contactsSelector } from "./redux/contacts/contactsSelectors";

// function initContacts() {
//   const contacts = localStorage.getItem("contacts");
//   if (contacts) {
//     return JSON.parse(contacts);
//   } else {
//     return [];
//   }
// }

function App() {
  const contacts = useSelector(contactsSelector);
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();

  // useEffect(() => {
  //   getAllContactsService().then((data) => setContacts(data));
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  function addContact(name, number) {
    const existingContact = contacts.find((contact) => contact.name === name);

    if (existingContact) {
      alert(existingContact.name + " is already exists!");
      return;
    }

    dispatch(addContactAction(name, number));
  }

  function deleteContact(id) {
    // removeContactService(id).then(() => {
    //   setContacts((prevContacts) =>
    //     prevContacts.filter((contact) => contact.id !== id)
    //   );
    // });
    dispatch(deleteContactAction(id));
  }

  // function checkContact(name) {
  //   setContacts((contact) => {
  //     if (contact.name === name) {
  //       alert(contact.name + "is already used");
  //     }
  //   });
  // }

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
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={deleteContact}
        />
      </div>
    </div>
  );
}

export default App;
