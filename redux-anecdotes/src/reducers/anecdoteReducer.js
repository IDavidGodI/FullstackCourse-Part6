import { createSlice } from "@reduxjs/toolkit"
import anecdotesService from "../services/anecdotesService"

const anecdotesSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    updateAnecdote: (state, action) => {
      const updatedAnecdote = action.payload;
      return state.map(anecdote =>
        anecdote.id === updatedAnecdote.id ? updatedAnecdote : anecdote
      )
    },
    createAnecdote: (state, action) => {
      return state.concat(action.payload)
    },
    setAnecdotes: (state, action) => {
      return action.payload
    }

  }
})

export const { updateAnecdote, createAnecdote, setAnecdotes } = anecdotesSlice.actions;

export const initializeAnecdotes = () => {
  return async disp => {
    const anecdotes = await anecdotesService.getAnecdotes();
    disp(setAnecdotes(anecdotes))
  }
}
export const addAnecdote = content => {
  return async disp => {
    const anecdote = await anecdotesService.postAnecdote(content);
    disp(createAnecdote(anecdote))
  }
}

export const voteAnecdote = anecdote => {
  return async (disp) => {
    const votes = anecdote.votes + 1
    const updated = await anecdotesService.updateAnecdote(anecdote.id, { votes })

    disp(updateAnecdote(updated));
  }
}

export default anecdotesSlice.reducer
