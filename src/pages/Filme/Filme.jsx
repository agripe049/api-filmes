import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Filme.css'


function Filme() {

  const { id } = useParams();
  const [filme, setFilme] = useState(null);

  useEffect(() => {
    async function carregarFilme() {
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}&language=pt-BR`;
      const response = await fetch(url);
      const data = await response.json();

      setFilme(data);
    }
    carregarFilme();
  }, [id]);

  if (!filme) return <p>Carregando...</p>;
  const ano = filme.release_date?.slice(0, 4);

  function formatarDuracao(minutos) {
    const h = Math.floor(minutos / 60);
    const m = minutos % 60;
    return `${h}h ${m}min`;
  }

  return (
    <div className='filme-container'>
      <img
        src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
        alt={filme.title}
        className='filme-poster'
      />

      <div className='filme-info'>
        <h1>{filme.title}</h1>

        <div className='filme-meta'>
          {ano && <span>{ano}</span>}
          <span>{formatarDuracao(filme.runtime)}</span>
        </div>


        <p className='filme-overview'>{filme.overview}</p>

        <Link to="/">
          <button className='btn-voltar'>Voltar</button>
        </Link>
      </div> 
    </div>
  )
}

export default Filme;