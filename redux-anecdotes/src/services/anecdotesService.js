import axios from "axios"
const baseURL = "http://localhost:3001"
const getAnecdotes = async () => {
  const response = await axios.get(`${baseURL}/anecdotes`);
  return response.data;
}

const postAnecdote = async (content) => {
  const newNote = { content, votes: 0 }
  const response = await axios.post(`${baseURL}/anecdotes`, newNote);
  return response.data;
}

const updateAnecdote = async (id, anecdote) => {
  const response = await axios.patch(`${baseURL}/anecdotes/${id}`, anecdote);
  return response.data
}

export default { getAnecdotes, postAnecdote, updateAnecdote }
