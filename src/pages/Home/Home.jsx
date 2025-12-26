import { useEffect, useState } from "react";
import FilmesPopulares from "../../components/FilmesPopulares/FilmesPopulares";
import FilmeCard from "../../components/FilmeCard/FilmeCard";

function Home({ search }) {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search && search.length >= 3) {
      buscarFilmes(search);
    }
  }, [search]);

  async function buscarFilmes(texto) {
    try {
      setLoading(true);

      const url = `https://api.themoviedb.org/3/search/movie?api_key=${
        import.meta.env.VITE_TMDB_KEY
      }&language=pt-BR&query=${texto}`;

      const response = await fetch(url);
      const data = await response.json();

      setFilmes(data.results);
    } catch (error) {
      console.log("Erro ao buscar filmes", error);
    } finally {
      setLoading(false);
    }
  }

  // 👉 Se NÃO estiver buscando, mostra os populares (seu componente intacto)
  if (!search || search.length < 3) {
    return <FilmesPopulares />;
  }

  // 👉 Se estiver buscando
  return (
    <div>
      {loading && <p className="loading">Buscando filmes...</p>}

      <div className="filmes-container">
        {!loading &&
          filmes.map((filme) => (
            <FilmeCard key={filme.id} filme={filme} />
          ))}
      </div>
    </div>
  );
}

export default Home;
