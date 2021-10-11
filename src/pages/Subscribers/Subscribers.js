import axios from 'axios';
import { useEffect, useState } from 'react';
import './main.scss'
import MovieCon from '../../containers/Movie/MovieCon'
import Footer from '../../containers/Footer/Footer'
import Pagination from '../../components/Pagination/Pagination'

const Subscription = ()=>{
    const [ tvShov, setTvShov ] = useState({
        isFetched: false,
        data: {},
        error: null,
        totalPages: 1
    })

    const [activePage, setActivepage] = useState(1)

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/tv/airing_today`, {
            params: {
                api_key: '9c3eab726cd61f5987bf26a9e76a226c',
                page: activePage,
                include_adult: true
               
            }
        })
            .then(function (res) {
                setTvShov({
                    isFetched: true,
                    data: res.data.results,
                    totalPages: res.data.total_pages,
                    error: false
                })
            })
            .catch(function (err) {
                setTvShov({
                    isFetched: false,
                    error: err,
                    data: []
                })
            })
    }, [activePage])
    const activePageChanger = (page) => {
        if (page > 0 && page <= tvShov.data.total_pages) {
            setActivepage(page)
        }
    }

    console.log(tvShov);
    return(
        <div className="tv-wrapper">
            <div className="container">
                <div className="page-header">
                    <h1 className="page-name">
                        When you bored, Watch TvShows !
                    </h1>
                </div>

                <div className="tv-shows">
                    {   
                        tvShov.isFetched ? (
                            tvShov.data.slice(0, 18).map(item =>(
                                <MovieCon
                                    id={item.id}
                                    imgLink={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                                    releaseDate={item.first_air_date}
                                    movieTitle={item.name}
                                    vote={item.vote_average}

                                />
                            ))
                        ):(
                            <h1>Loading ...</h1>
                        )
                    }
                </div>

                <div className="pagination">
                    <Pagination activePage={activePage} setActivepage={activePageChanger} totalPages={tvShov.total_pages} />
                </div>
               
            </div>
            <footer className="footer">
                <div className="container">
                    <Footer></Footer>
                </div>
            </footer>
        </div>
    )
}

export default Subscription;