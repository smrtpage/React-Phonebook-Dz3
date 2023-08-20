import React from "react";
import styles from "./ContactList.module.css";
import { AnimatePresence, motion } from "framer-motion";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <AnimatePresence>
      {contacts.length !== 0 && (
        <motion.ul
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className={styles.contactsList}
        >
          <AnimatePresence>
            {contacts.map((contact) => (
              <motion.li
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                id={contact.id}
                key={contact.id}
              >
                {contact.name} : {contact.number}
                <motion.button onClick={() => onDeleteContact(contact.id)}>
                  Delete
                </motion.button>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default ContactList;
