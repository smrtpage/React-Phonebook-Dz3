import { createReducer } from "@reduxjs/toolkit";
import { addContactAction, deleteContactAction } from "./contactsAction";
// import { contactsSelector } from "./contactsSelectors";

export const contactsReducer = createReducer([], (builder) => {
  builder.addCase(addContactAction, (state, action) => {
    state.push(action.payload);
  });
  builder.addCase(deleteContactAction, (state, action) => {
    state.filter((contact) => contact.id !== id);
  });
});
