import { useDispatch, useSelector } from "react-redux"
import { voteAnecdote } from "../reducers/anecdoteReducer"

const Anecdote = ({anecdote})=>{

  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(voteAnecdote(id))
  }
  return (
  <>
    <div>
      {anecdote.content}
    </div>
    <div>
      has {anecdote.votes}
      <button onClick={() => vote(anecdote.id)}>vote</button>
    </div>
  </>
  )
}


const AnecdoteList = () => {
  const anecdotes = useSelector(state => {
    return state.sort((a1,a2) => a2.votes-a1.votes)
  })
  return (
    <>
    {anecdotes.map(anecdote =>
      <Anecdote key={anecdote.id} anecdote={anecdote}/>
    )}
    </>
  )
}


export default AnecdoteList;
