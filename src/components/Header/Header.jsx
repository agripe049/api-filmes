import { useState } from "react";
import "./Header.css";

function Header({ onSearch }) {
  const [texto, setTexto] = useState("");

  function handleChange(e) {
    const valor = e.target.value;
    setTexto(valor);
    onSearch(valor);
  }

  return (
    <header className="header-container">
      <h1>Cine Pot</h1>

      <input
        type="text"
        placeholder="Pesquisar filmes..."
        value={texto}
        onChange={handleChange}
      />
    </header>
  );
}

export default Header;
