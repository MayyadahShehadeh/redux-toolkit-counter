import { createSlice } from '@reduxjs/toolkit'

const initialStateValues = {
  count: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialStateValues,
  reducers: {
    increment: (state) => {
      state.coin += 1
    },
    decrement: (state) => {
      state.coin -= 1
    }
  }
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer