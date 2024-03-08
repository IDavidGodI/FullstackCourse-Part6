import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: { text: "", visible: false, timer: null },
  reducers: {
    setNotification: (state, action) => {
      state.text = action.payload.text
      clearTimeout(state.timer)
      state.timer = action.payload.timer
      console.log(state.timer)
      state.visible = true;
    },
    hideNotification: (state, action) => {
      state.visible = false;
    }
  }
})
export const { setNotification, hideNotification } = notificationSlice.actions

export default notificationSlice.reducer
