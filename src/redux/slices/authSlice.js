import { createSlice } from '@reduxjs/toolkit'

const initialState = {

}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

    storeUser: (state, action) => {
        state.user = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { storeUser} = authSlice.actions

export default authSlice.reducer