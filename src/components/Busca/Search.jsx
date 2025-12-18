import { useState } from 'react';
import "./Search.css"

function Search ({ onSearch }) {
    const [query, setQuery] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (!query.trim()) return;

        onSearch(query);
    }

    
  return (
    <div>
        <form className='search' onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder='Buscar filme...'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type='submit'>Buscar</button>
        </form>
    </div>
  )
}

export default Search;