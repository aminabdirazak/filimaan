import React, {useState, useEffect} from "react";
import './App.css';
import MovieCard from "./MovieCard";
import SearchIcon from './search.svg'
// d9b6986c
const API_URL = 'https://www.omdbapi.com/?apikey=d9b6986c';


const App = () => {
    const [filimaan, setFilim] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const SearchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setFilim(data.Search)
    }


    useEffect(() => {
        SearchMovies()
    }, []);

    
    return (
        <div className="app">
              <h1>Filimaan</h1>   


              <div className="search">
                <input type="text" 
                placeholder="Raadi filimkasto aad daoonto"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => SearchMovies(searchTerm)}
                />
              </div>

              {
                filimaan?.length > 0 
                ? (
                    <div className="container">
                        {filimaan.map((filim) => (
                            <MovieCard filim={filim} />
                        ))}
                  </div>
                ) : (
                    <div className="empty">
                        <h2>No Movies were found!</h2>
                    </div>
                )
              }
             
        </div>
    );
}

export default App;