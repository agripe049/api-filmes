import './FilmeCard.css'
import { Link } from 'react-router-dom';
import semImagem from '../../../public/semImagem.png'

function FilmeCard({ filme }) {
  return ( 
    <div className='filme-card'>
      <Link to={`/filme/${filme.id}`}>
        <img 
          src={
            filme.poster_path
            ? `https://image.tmdb.org/t/p/w200${filme.poster_path}`
            : '/semImagem.png'} 
          alt={filme.title} 
          className='filme-card-img'
        />
      </Link>
      <h3 className='filme-card-title'>{filme.title}</h3>
    </div>
  ); 
}

export default FilmeCard;