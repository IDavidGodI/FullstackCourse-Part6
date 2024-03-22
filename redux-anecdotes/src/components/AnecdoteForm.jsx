import { useDispatch } from "react-redux";
import { addAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const create = (event) => {
    event.preventDefault()
    const content = event.target.content.value;
    event.target.content.value = ""
    dispatch(addAnecdote(content))
  }

  return (
    <form onSubmit={create}>
      <div><input placeholder="Anecdote" name="content" /></div>
      <button>create</button>
    </form>
  )
}

export default AnecdoteForm
