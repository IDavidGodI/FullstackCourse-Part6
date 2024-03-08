import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { voteAnecdote } from "../reducers/anecdoteReducer"
import { setNotification, hideNotification } from "../reducers/notificationReducer"
import Notification from "./Notification"

const Anecdote = ({ anecdote }) => {

  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(voteAnecdote(id))
    dispatch(setNotification({
      text: `You voted '${anecdote.content}'`,
      timer: setTimeout(() => dispatch(hideNotification()), 5000)
    }))
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
    let selectedAnecdotes = state.anecdotes
    if (state.filter.length > 0) {
      selectedAnecdotes = selectedAnecdotes.filter(a =>
        a.content.toLowerCase()
          .includes(state.filter.toLowerCase())
      )
    }
    return [...selectedAnecdotes].sort((a1, a2) => a2.votes - a1.votes)
  })

  const showNotification = useSelector(state => state.notification.visible)
  return (
    <>
      {showNotification && <Notification />}
      {anecdotes.length > 0 ? anecdotes.map(anecdote =>
        <Anecdote key={anecdote.id} anecdote={anecdote} />
      ) : <p>There's nothing mathing the filter</p>}
    </>
  )
}


export default AnecdoteList;
