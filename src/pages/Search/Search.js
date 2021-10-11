import { useEffect, useState } from 'react'

import './main.scss'
import {
    InputSearch
} from '../../assets/icons/icons'
import MovieCon from '../../containers/Movie/MovieCon'
import Header from '../../containers/Header'
import axios from 'axios'

import 'antd/dist/antd.css'
import './main.scss'
import { Input } from 'antd';
const Searchmov = () => {
    const [movie, setMovie] = useState({
        isFetched: false,
        data: [],
        error: null
    })
    const [searchMovie, setsearchMovie] = useState('')
    const [ serchPerson, setPerson ] = useState(' ')

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchMovie}`, {
            params: {
                api_key: '9c3eab726cd61f5987bf26a9e76a226c',
                include_adult: true
            }
        })

            .then(function (response) {
                setMovie({
                    isFetched: true,
                    data: response.data.results,
                    error: false
                })
            })

            .catch(function (error) {
                setMovie({
                    isFetched: true,
                    data: [],
                    error: error
                })
            })
            
            console.log(movie.data)
            console.log(movie.isFetched)

    }, [searchMovie])

    console.log(movie.data);

    const { Search } = Input;


    return (
        <div className="search-wrapper">
            <Header />
            <div className="container">
                <div className="search-holder">
                    <div className="search-input">
                        <InputSearch className="searchIcon" />
                        <Search className="input" placeholder="Search for Movie" allowClear onSearch={(value) => {
                            console.log(value)
                            setsearchMovie(value)
                        }} />
                    </div>
                    <div className="search-items">
                        <button className="person-search">Person</button>
                        <button className="person-movie">Movie</button>
                    </div>
                </div>
                <div className="result-holder">
                    {
                        movie.isFetched ?
                            (
                                <div className="wrapper">
                                    {
                                        movie.data && movie.data.length !== 0 ? (
                                            movie.data.slice(0,18).map(item => (
                                                <MovieCon
                                                    id={item.id}
                                                    imgLink={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                                                    releaseDate={item.release_date}
                                                    movieTitle={item.title}

                                                />

                                            ))
                                        ) : (
                                            <h2>{' '}</h2>
                                        )
                                    }
                                </div>
                            ) :
                            (
                                <h1>{''}</h1>
                            )
                    }

                </div>
    
            </div>
        </div>
    )
}

export default Searchmov;