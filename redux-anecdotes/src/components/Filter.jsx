import { useDispatch } from "react-redux"

import { setFilter } from "../reducers/filterReducer"

const Filter = () => {

  const dispatch = useDispatch()

  const handleInput = (e) => {
    dispatch(setFilter(e.target.value));
  }

  return (
    <div>
      <input placeholder="filter what you want to see"
        onChange={handleInput}
      />

    </div>
  )
}


export default Filter;

