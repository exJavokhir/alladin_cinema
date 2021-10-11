import './main.scss'
import { useState, useEffect } from "react";
import axios from 'axios'
import Footer from '../../containers/Footer/Footer';
import MovieCon from '../../containers/Movie/MovieCon'
import Pagination from '../../components/Pagination/Pagination'

const News = ()=>{

    const [ newMovie, setNewMovie ] = useState({
        isFetched: false,
        data:{},
        error:null,
        totalPages: 1
    })

    const [activePage,  setActivepage] = useState(1)

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/upcoming`, {
            params: {
                api_key: "9c3eab726cd61f5987bf26a9e76a226c",
                page: activePage
            }
        })

            .then(function (response) {
                setNewMovie({
                    isFetched: true,
                    data: response.data,
                    totalPages: response.data.total_pages,
                    errro: false
                })
            })
            .catch(function (error) {
                setNewMovie({
                    isFetched: true,
                    data: [],
                    error: error
                })
            })
    },[activePage])

    const activePageChanger = (page)=>{
        if(page > 0 && page <= newMovie.data.total_pages){
            setActivepage(page)
        }
    }


    return(
        <div className="news-movie">
            <div className="container">
                <div className="inner-page-info">
                    <h1 className="page_name">
                        The Latest Movies for You !
                    </h1>

                    <div className="movies-list">
                        {
                            newMovie.isFetched ? (
                                newMovie.data.results.slice(0, 18).map(item =>(
                                    <MovieCon
                                        imgLink={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                                        movieTitle={item.title}
                                        releaseDate={item.release_date}
                                        id={item.id}
                                        vote={item.vote_average}
                                    />
                                ))
                            ):(
                                <h1>Loading</h1>
                            )
                        }
                    </div>
                    <div className="pagination-wrapper">

                        <Pagination activePage={activePage} setActivepage={activePageChanger} totalPages={newMovie.total_pages}/>

                    </div>
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

export default News;