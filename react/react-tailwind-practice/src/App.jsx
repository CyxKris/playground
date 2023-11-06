import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from './Hero';

const App = () => {
    // const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=13c116823e387fbe0f220b6a2f6d84d1").then((response) => console.log(response.data));
    })

    // const fetchPopular = async () => {
    //     const data = await Axios(
    //         "https://api.themoviedb.org/3/movie/top_rated?api_key=13c116823e387fbe0f220b6a2f6d84d1"
    //     );
    // }
    return (
        <>
            <Hero />
        </>
    );
}
export default App;