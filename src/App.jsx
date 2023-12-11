import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import styles from "./App.module.css";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import {
  addContactAction,
  deleteContactAction,
  setQueryAction,
} from "./redux/contacts/contactsAction";
import {
  selectContacts,
  selectQuery,
  selectFilteredContacts,
} from "./redux/contacts/contactsSelectors";

// function initContacts() {
//   const contacts = localStorage.getItem("contacts");
//   if (contacts) {
//     return JSON.parse(contacts);
//   } else {
//     return [];
//   }
// }

function App() {
  const contacts = useSelector(selectContacts);
  const query = useSelector(selectQuery);
  const filteredContacts = useSelector(selectFilteredContacts);
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

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContactAction(newContact));
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

  return (
    <div className={styles.container}>
      <h2>Phonebook</h2>
      <ContactForm onAddContact={addContact} />
      <h2>Contacts</h2>
      <div className={styles.contactsSection}>
        <Filter
          onFilterChange={(value) => dispatch(setQueryAction(value))}
          filterValue={query}
        />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={deleteContact}
        />
      </div>
    </div>
  );
}

export default App;
