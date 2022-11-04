import React from 'react'
import './Search.css'

const Search = () => {
  return (
      <div className="Search">
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search entire store" aria-label="Search entire store" aria-describedby="basic-addon2" />
        <span className="input-group-text bg-danger" id="basic-addon2">Search</span>
      </div>
    </div>
  )
}

export default Search