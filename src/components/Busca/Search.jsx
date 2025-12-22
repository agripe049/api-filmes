import { useState } from 'react';
import "./Search.css"

function Search({ buscarFilmes }) {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    setQuery(value);
    // Só busca se tiver pelo menos 3 letras
    if (value.length >= 3) {
      buscarFilmes(value);
    }
  }

  return (
    <div className='search-container'>
      <input
        type="text"
        placeholder='Buscar filme...'
        value={query}
        onChange={handleChange}
      />
    </div>
  )
}

export default Search;