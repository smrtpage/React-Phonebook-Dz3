import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  addContactAction,
  deleteContactAction,
  setQueryAction,
} from "./contactsAction";

const contactsReducer = createReducer([], (builder) => {
  builder.addCase(addContactAction, (state, action) => {
    state.unshift(action.payload);
  });
  builder.addCase(deleteContactAction, (state, action) => {
    return state.filter((contact) => contact.id !== action.payload);
  });
});

const queryReducer = createReducer("", (builder) => {
  builder.addCase(setQueryAction, (_, action) => action.payload);
});

export default combineReducers({
  items: contactsReducer,
  query: queryReducer,
});
