import './App.css';
import {getMovieList, searchMovie} from './api'
import {useEffect, useState} from 'react'

const App = ()=> {
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    })
  }
  ,[]);
  const PopularMovieList = () =>{
    return popularMovies.map((movie, i) => {
      return (
        <div className="Movie-wrapper" key={i}>
          <div className="Movie-title">{movie.title}</div>
          <img className="Movie-image" src={process.env.REACT_APP_BASEIMGURL + movie.poster_path} alt={movie.title}/>
          <div className="Movie-detail">
            <div className="Movie-date">{movie.release_date}</div>
            <div className="Movie-rate">{movie.vote_average}</div>
          </div>
        </div>
      )
    })
  }

  const search = async (e) => {
    setSearchMovies(e);
    // untuk search movie kita memerlukan endpoint baru
    // kita akan membuat fungsi baru di api.js
    // lalu kita panggil fungsi tersebut di sini
    if(e.length > 4){
      const result = await searchMovie(e);
      setPopularMovies(result); // hasil dari search akan kita set ke state popularMovies
      console.log(result);
  };
};

  return (
    <div className="App">
      <header className="App-header">
        <h1>Searching Film</h1>
        <input type="text" placeholder="Search..." className="Movie-input" 
        onChange = {({target}) => search(target.value)}
        />
        {/* Display Search Info */}
        <h3>{searchMovies.length > 4 ? `Search Result for: ${searchMovies}` : 'Popular Movies'}</h3>
        <div className="Movie-container">
          <PopularMovieList />
        </div>
        <footer>
        <p>© 2021</p>
      </footer>
      </header>
    </div>
  );
}

export default App;
