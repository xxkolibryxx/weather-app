/* eslint-disable no-param-reassign */

export const reducers = {
  setUserInfo: (state, action) => {
    state.userInfo = action.payload
  },
  setUserInfoLoading: (state, action) => {
    state.loading = action.payload
  },
}
