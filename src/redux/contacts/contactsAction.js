import { createAction } from "@reduxjs/toolkit";

export const addContactAction = createAction("CONTACTS_ADD");
export const deleteContactAction = createAction("CONTACTS_DELETE");
export const setQueryAction = createAction("CONTACTS_SET_QUERY");
