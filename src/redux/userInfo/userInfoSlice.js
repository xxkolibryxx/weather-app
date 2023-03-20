/* eslint-disable operator-linebreak */
import { createSlice } from '@reduxjs/toolkit'
import { reducers } from './reducers'

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {
    loading: false,
  },
  reducers,
})
export const { setUserInfo, setUserInfoLoading } = userInfoSlice.actions
export default userInfoSlice.reducer
