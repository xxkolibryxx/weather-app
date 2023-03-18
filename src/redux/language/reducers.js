/* eslint-disable no-param-reassign */

export const reducers = {
  setLanguage: (state, action) => {
    state.lang = action.payload;
    localStorage.setItem('language', action.payload);
  },
};
