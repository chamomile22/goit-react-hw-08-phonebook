import { createSlice } from '@reduxjs/toolkit';
import {
  getContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from './operations';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const isPending = action => action.type.endsWith('/pending');
const isRejected = action => action.type.endsWith('/rejected');

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleGetContactsFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.contacts = payload;
};

const handleAddContactFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.contacts.push(payload);
};

const handleDeleteContactFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.contacts = state.contacts.filter(({ id }) => id !== payload.id);
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, handleGetContactsFulfilled)
      .addCase(addContactThunk.fulfilled, handleAddContactFulfilled)
      .addCase(deleteContactThunk.fulfilled, handleDeleteContactFulfilled)
      .addMatcher(isPending, handlePending)
      .addMatcher(isRejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
