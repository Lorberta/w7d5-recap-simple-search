import React from 'react'
import './CoolSearch.css'

export default function CoolSearch(props) {
  return (
    <div className="CoolSearch">
      <div>Search:</div>
      <div>
        <input 
          type="text" 
          value={props.search} 
          onChange={e => props.onSearch(e.target.value)}
        />
      </div>
    </div>
  )
}
