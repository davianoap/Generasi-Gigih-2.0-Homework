import React from 'react'
import './style.css'

const Search = ({ onSearch }) => {
  
    const onTrigger = (e) => {
        e.preventDefault();
        onSearch(e.target.query.value);
    }
  
    return (
    <form onSubmit={onTrigger}>
        <div className="input-icons">
            <input 
                className="input-field" 
                type="text" 
                name="query" 
                placeholder="Cari Lagu kesukaanmu" 
                onKeyPress={(e) => e.key === 'Enter' && onTrigger}
            />
        </div>
    </form>
  )
}

export default Search