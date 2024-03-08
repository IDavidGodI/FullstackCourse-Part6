import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import anecdotesReducer from "./reducers/anecdoteReducer"
import filterReducer from "./reducers/filterReducer.js"
import { configureStore } from "@reduxjs/toolkit"
import notificationReducer from "./reducers/notificationReducer.js"



const store = configureStore({
  reducer: {
    anecdotes: anecdotesReducer,
    filter: filterReducer,
    notification: notificationReducer
  }
})




ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
)
