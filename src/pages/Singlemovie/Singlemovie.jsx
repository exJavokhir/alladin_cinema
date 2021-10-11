import './main.scss'



import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import MovieCon from '../../containers/Movie/MovieCon'

import Footer from '../../containers/Footer/Footer'

import Imdb from '../../assets/images/imdb.png'
import Imdb2 from '../../assets/images/imdbicon.png'
import Close from '../../assets/icons/close.svg'
import Apple from '../../assets/sound/apple.mp3'
import Heart from '../../assets/icons/heart.png'
import Heart1 from '../../assets/icons/heart1.png'




const Singlemovie = ({ match })=>{

    const [ movieInfo, setMovieInfo ] = useState({
        isFetched:false,
        data: {},
        error: null
    })


    const [ slickMovie, setSlickMovie ] = useState({
        isFetched:false,
        data:{},
        error: null
    })

    const [movieCredit, setmovieCredit] = useState({
        isFetched: false,
        data: {},
        error: null
    })

    const [movieVideo, setmovieVideo] = useState({
        isFetched: false,
        data: {},
        error: null
    })

    const [wishList, setWishList] = useState(window.localStorage.getItem('wishlist') ? JSON.parse(window.localStorage.getItem('wishlist')) : [])
    const [heart, setHeart ] = useState(false)

    const addWishlist = (movie_data)=>{
        console.log(movie_data)
        setWishList([...wishList, movie_data])
        window.localStorage.setItem('wishlist',JSON.stringify(wishList))
        // sound()
    }

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}`,{
            params: {
                api_key: '9c3eab726cd61f5987bf26a9e76a226c'
            }
        })



        .then(function(response){
            setMovieInfo({
                isFetched:true,
                data: response.data,
                error: false
            })
        })

        .catch(function(error){
            setMovieInfo({
                isFetched:true,
                data:[],
                error: error
            })
        })


            axios.get (`https://api.themoviedb.org/3/movie/${match.params.id}/recommendations`, {
                params:{
                    api_key: '9c3eab726cd61f5987bf26a9e76a226c'
                }
            })

            .then(function(response){
                setSlickMovie({
                    isFetched:true,
                    data: response.data.results,
                    error: false
                })
            })

            .catch(function(error){
                setSlickMovie({
                    isFetched: true,
                    data: [],
                    error: error
                })
            })


        axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}/credits`, {
            params: {
                api_key: '9c3eab726cd61f5987bf26a9e76a226c'
            }
        })

            .then(function (response) {
                setmovieCredit({
                    isFetched: true,
                    data: response.data,
                    error: false
                })
            })

            .catch(function (error) {
                setmovieCredit({
                    isFetched: true,
                    data: [],
                    error: error
                })
            })

        axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}/videos`, {
            params: {
                api_key: '9c3eab726cd61f5987bf26a9e76a226c'
            }
        })

            .then(function (response) {
                setmovieVideo({
                    isFetched: true,
                    data: response.data,
                    error: false
                })
            })

            .catch(function (error) {
                setmovieVideo({
                    isFetched: true,
                    data: [],
                    error: error
                })
            })
        setHeart(false)
    },[match.params.id])


    const iAdolat = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
    };

    const iActor = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
    };


    function addActive (){
        document.querySelector('.modal').classList.add('active')
    }
    function remActive() {
        document.querySelector('.modal').classList.remove('active')
    }
    function sound (){
        setHeart(true)
        document.querySelector('.music').play()
        document.querySelector('.like-two').classList.add('active')
        document.querySelector('.like-one').classList.add('active')
    }

    return(

        <div className="body-wrapper">
            <audio src={Apple} className="music"></audio>
            <div className="single-wrapper"  style={{ backgroundImage: ` linear-gradient(180deg, rgba(22, 21, 29, 0) 0%, rgba(22, 21, 29, 0.8) 48.31%, #16151D 100%),url(https://image.tmdb.org/t/p/original/${movieInfo.data.backdrop_path})`}}>
                <div className="modal">
                    <button onClick={remActive} className="close-btn">
                        <img src={Close} alt="" />
                    </button>
                    {
                        movieVideo.isFetched ? (
                            movieVideo.data.results.slice(0, 1).map(item =>(
                                <div className="movie-treyler">
                                    <iframe width="768" height="432" src={`https://www.youtube.com/embed/${item.key}`} title="YouTube video player" frameborder="0"></iframe>
                                </div>
                            ))
                        ) : (
                            <h1> Video doesn't uploaded !  </h1>
                        )
                    }
                </div>
                <div className="container">
                    {
                        movieInfo.isFetched ? (
                            <div className="movieInfo-data">
                                <div className="container fuck-slider">
                                                    <div className="buttons">
                                                        <button className="new-btn">New</button>
                                                        <button className="full-btn">FULL HD</button>
                                                    </div>
                                                    <h1 className="movie-title">{movieInfo.data.title}</h1>
                                                    <div className="movie-info">

                                                    <div className="block-one">
                                                            <span className="movie-date">{movieInfo.data.release_date} | </span>
                                                            <span className="movie-adults">16+</span>
                                                    </div>

                                                        <div className="block-two">
                                                            <img src={Imdb} alt="" className="img-one"/>
                                                            <span className="movie-vote">{movieInfo.data.vote_average}</span>
                                                        </div>

                                                        <div className="block-three">
                                                            <img src={Imdb2} alt="" className="img-two"/>
                                                            <span className="movie-count">{movieInfo.data.vote_count}</span>
                                                        </div>
                                                    </div>
                                                    <div className="subs-view">
                                                        <button onClick={addActive} className="subs-btn">Watch by Trailer</button>
                                                        <button className="fav-btn"
                                                            onClick={
                                                                document.querySelector('.music').play(),
                                                                () => heart ? null : addWishlist(movieInfo.data)
                                                            }
                                                        >
                                                            <img className="like-one " src={Heart} alt="" />
                                                            <img className="like-two" src={Heart1} alt="" />
                                                        </button>
                                                    </div>
                                                </div>

                            </div>
                        ):(
                            <h1>Loading</h1>
                        )
                    }




                </div>


                    <div className="movie-data-info">
                        <div className="container">
                            {
                                movieInfo.isFetched ? (
                                    <>
                                        <h2 className="tagline">{movieInfo.data.tagline}</h2>
                                        <h3 className="info-data">Year <span className="info-data-child one">{movieInfo.data.release_date}</span></h3>
                                        {
                                            movieInfo.data.production_countries.map(item => (
                                                <h3 className="info-data">Country <span className="info-data-child two">{item.name}</span></h3>
                                            ))
                                        }
                                        <div className="what-the-fuck">
                                            <h3 className="info-data">Genres </h3>
                                            {
                                                movieInfo.data.genres.map(item1=>(
                                                    <>
                                                        <span className="info-data-child three">{item1.name}</span>
                                                    </>
                                                ))
                                            }
                                        </div>
                                    </>
                                ):(
                                    <h1>Loading</h1>
                                )
                            }                        
                        </div>                                
                    </div>

                         <Link className="more-info">More Info</Link>                           
            </div>

            <main>
                <div className="main-section container">
                    {
                        movieInfo.isFetched ? (
                            <div className="section-wrapper">
                                <div className="left">
                                    <h2>Description</h2>
                                    <p>{movieInfo.data.overview}</p>
                                    <div className="movie_actors">
                                        {
                                            movieCredit.isFetched ? (
                                                <div className="actor-info">
                                                    <h3 className="actors-title">Actors</h3>
                                                    <Slider {...iActor}>
                                                        {
                                                            movieCredit.data.cast.map(item => (
                                                                <div className="actors">
                                                                    <img className="actor_image" src={`https://image.tmdb.org/t/p/original/${item.profile_path}`} alt="" />
                                                                    <span className="actor_name">{item.name}</span>
                                                                </div>
                                                            ))
                                                        }
                                                    </Slider>
                                                </div>
                                            ) : (
                                                <h1>kemadi</h1>
                                            )
                                        }
                                    </div>
                                </div>

                                <div className="right">
                                    <img src={`https://image.tmdb.org/t/p/original/${movieInfo.data.poster_path}`} alt=""/>
                                </div>
                            </div>
                        ):(
                            <h1>Loading</h1>
                        )
                    }
                </div>


                <div className="slick-one">
                    <div className="slick-wrapper container">
                        <h1 className="slick-title">You may like </h1>
                        {
                            slickMovie.isFetched ? (
                                <Slider {...iAdolat}>
                                    {
                                        slickMovie.data.map(item =>(
                                            <MovieCon
                                                imgLink = {`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                                                id = {item.id}
                                                releaseDate = {item.release_date}
                                                movieTitle = {item.title}
                                                vote={item.vote_average}                                        
                                            />
                                        ))
                                    }
                                 </Slider>
                            ):(
                                <h1>loafing</h1>
                            )
                        }
                        
                    </div>
                </div>
            </main>

            <footer className="footer">
                <div className="container">
                    <Footer></Footer>
                </div>
            </footer>
        </div>

    )
}

export default Singlemovie