import { useDispatch, useSelector } from "react-redux"
import { initializeAnecdotes, voteAnecdote } from "../reducers/anecdoteReducer"
import { setNotification, hideNotification, createNotification } from "../reducers/notificationReducer"
import Notification from "./Notification"
import { useEffect } from "react"

const Anecdote = ({ anecdote }) => {

  const dispatch = useDispatch()

  const vote = () => {
    dispatch(voteAnecdote(anecdote))
    dispatch(createNotification(`You voted '${anecdote.content}'`, 10))
  }
  return (
    <>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => vote()}>vote</button>
      </div>
    </>
  )
}


const AnecdoteList = () => {

  const filter = useSelector(state => state.filter)
  const anecdotes = useSelector(state => state.anecdotes)
  const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes)
  const showNotification = useSelector(state => state.notification.visible)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])
  return (
    <>
      {showNotification && <Notification />}
      {
        anecdotes.length > 0 ?
          sortedAnecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase())).map(anecdote =>
            <Anecdote key={anecdote.id} anecdote={anecdote} />
          )
          : <p>There's nothing mathing the filter</p>
      }
    </>
  )
}


export default AnecdoteList;
