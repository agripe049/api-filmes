import { useEffect, useState } from 'react'
import FilmeCard from '../FilmeCard/FilmeCard';
import './FilmesPopulares.css'
import Search from '../Busca/Search';

function FilmesPopulares() {
    const [filmes, setFilmes] = useState([]);
    const [buscando, setBuscando] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        carregarPopulares();
    }, []);

    async function carregarPopulares() {
        try {
            setLoading(true);
            setError(null);
            setBuscando(false);

            const url = `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_KEY}&language=pt-BR`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Erro ao carregar filmes populares");
            }

            const data = await response.json();
            setFilmes(data.results);
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false);
        }
    }


    async function buscarFilmes(query) {
        if (!query) return;

        try {
            setLoading(true);
            setError(null);
            setBuscando(true);

            const url = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=pt-BR&query=${query}`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Erro ao buscar filmes");
            }

            const data = await response.json();
            setFilmes(data.results);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    { loading && <p className="loading">Carregando filmes...</p> }
    { error && <p className="erro">{error}</p> }

    return (
        <div>
            <h1>{buscando ? "Resultados da busca" : "Filmes Populares"}</h1>
            <Search onSearch={buscarFilmes} />


            <div className='filmes-container'>
                {!loading &&
                    filmes.map((filme) => (
                        <FilmeCard key={filme.id} filme={filme} />
                    ))}
            </div>
        </div>
    )
}

export default FilmesPopulares;