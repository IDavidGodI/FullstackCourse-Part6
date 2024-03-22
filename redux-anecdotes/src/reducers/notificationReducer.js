import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: { text: "", visible: false, timer: null },
  reducers: {
    setNotification: (state, action) => {
      console.log(action.payload)
      state.text = action.payload.text
      clearTimeout(state.timer)
      state.timer = action.payload.timer
      state.visible = true;
    },
    hideNotification: (state, action) => {
      state.visible = false;
    }
  }
})
export const { setNotification, hideNotification } = notificationSlice.actions

export const createNotification = (text, time) => {
  return dispatch => {
    dispatch(setNotification({
      text,
      timer: setTimeout(() => dispatch(hideNotification()), time * 1000)
    }))
  }
}

export default notificationSlice.reducer
