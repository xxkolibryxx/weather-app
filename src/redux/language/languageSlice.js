/* eslint-disable operator-linebreak */
import { createSlice } from '@reduxjs/toolkit';
import { reducers } from './reducers';

const language = localStorage.getItem('language');

const initialState = {
  lang: language,
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers,
});
export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
