import { useState, useEffect } from "react";
import axios from 'axios'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import './main.scss'

import Imdb from '../../assets/images/imdb.png'
import Imdb2 from '../../assets/images/imdbicon.png'

import MovieCon from '../../containers/Movie/MovieCon'
import Latest from '../../components/Recently/Latest'

import Footer from '../../containers/Footer/Footer'

import Heart from '../../assets/icons/heart.png'
import Heart1 from '../../assets/icons/heart1.png'
import Apple from '../../assets/sound/apple.mp3'
import Close from '../../assets/icons/close.svg'
import User from '../../assets/icons/user.png'




const Home = ({match}) => {

    const [movieSlider, setMovieSlider] = useState({
        isFetched: false,
        data: {},
        errro: null
    })

    const [movieRecom, setMovieRecom] = useState({
        isFetched: false,
        data: {},
        errro: null
    })

    const [movieUpcoming, setMovieUpcoming] = useState({
        isFetched: false,
        data: {},
        errro: null
    })

    const [movieLatest, setmovieLatest] = useState({
        isFetched: false,
        data: {},
        error: null
    })
    // const [ set_wish, setWish ] = useState(window.localStorage.getItem('wishlist'))

    useEffect(() => {
        // banner uchun
        axios.get(`https://api.themoviedb.org/3/movie/popular`, {
            params: {
                api_key: "9c3eab726cd61f5987bf26a9e76a226c"
            }
        })

            .then(function (response) {
                setMovieSlider({
                    isFetched: true,
                    data: response.data.results,
                    errro: false
                })
            })
            .catch(function (error) {
                setMovieSlider({
                    isFetched: true,
                    data: [],
                    error: error
                })
            })

        // banner pasidagi recom uchun    
        axios.get(`https://api.themoviedb.org/3/tv/top_rated`, {
            params: {
                api_key: '9c3eab726cd61f5987bf26a9e76a226c'
            }
        })

            .then(function (response) {
                setMovieRecom({
                    isFetched: true,
                    data: response.data.results,
                    errro: false
                })
            })

            .catch(function (error) {
                setMovieRecom({
                    isFetched: true,
                    data: [],
                    error: error
                })
            })
        // birinchi slider uchun
        axios.get(`https://api.themoviedb.org/3/movie/top_rated`, {
            params: {
                api_key: "9c3eab726cd61f5987bf26a9e76a226c"
            }

        })
            .then(function (response) {
                setMovieUpcoming({
                    isFetched: true,
                    data: response.data.results,
                    error: false
                })
            })

            .catch(function (error) {
                setMovieUpcoming({
                    isFetched: true,
                    data: [],
                    error: error
                })
            })
        // ikkinchi yangi banner uchun
        axios.get(`https://api.themoviedb.org/3/movie/latest`, {
            params: {
                api_key: "9c3eab726cd61f5987bf26a9e76a226c"
            }
        })

            .then(function (response) {
                setmovieLatest({
                    isFetched: true,
                    data: response.data,
                    error: false
                })
            })

            .catch(function (error) {
                setmovieLatest({
                    isFetched: true,
                    data: [],
                    error: error
                })
            })
           
    }, [])



    const config = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    };


    const configuration = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
         responsive: [{
                 breakpoint: 1024,
                 settings: {
                     slidesToShow: 3,
                     slidesToScroll: 3,
                     infinite: true,
                     dots: true
                 }
             },
             {
                 breakpoint: 600,
                 settings: {
                     slidesToShow: 3,
                     slidesToScroll: 3,
                     initialSlide: 2
                 }
             },
             {
                 breakpoint: 480,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 2
                 }
             }

         ]
    };
    const iNilush = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
         responsive: [{
                 breakpoint: 1024,
                 settings: {
                     slidesToShow: 4,
                     slidesToScroll: 4,
                     infinite: true,
                     dots: true
                 }
             },
             {
                 breakpoint: 1140,
                 settings: {
                     slidesToShow: 6,
                     slidesToScroll: 6,
                     infinite: true,
                     dots: true
                 }
             },
             {
                 breakpoint: 600,
                 settings: {
                     slidesToShow: 3,
                     slidesToScroll: 3,
                     initialSlide: 2
                 }
             },
             {
                 breakpoint: 480,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 2
                 }
             }
         ]
    };
    return (
        <div className="contents">
            <audio src={Apple} className="music"></audio>

            <div className="slick-one">
                {
                    movieSlider.isFetched ? (

                        <Slider {...config}>
                            {
                                movieSlider.data.map((item) => (
                                    <div className="fuckkkkina">
                                        <div className="slide-wrapper" style={{
                                            backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`
                                
                                        }}>
                                           
                                            <div className="container fuck-slider">
                                                <div className="buttons">
                                                    <button className="new-btn">New</button>
                                                    <button className="full-btn">FULL HD</button>
                                                </div>
                                                <h1 className="movie-title">{item.title}</h1>
                                                <div className="movie-info">

                                                    <div className="block-one">
                                                        <span className="movie-date">{item.release_date} | </span>
                                                        <span className="movie-adults">16+</span>
                                                    </div>

                                                    <div className="block-two">
                                                        <img src={Imdb} alt="" className="img-one" />
                                                        <span className="movie-vote">{item.vote_average}</span>
                                                    </div>

                                                    <div className="block-three">
                                                        <img src={Imdb2} alt="" className="img-two" />
                                                        <span className="movie-count">{item.vote_count}</span>
                                                    </div>
                                                </div>
                                                <div className="block-foue">
                                                        <p className="movie-desc">{item.overview}</p>
                                                </div>

                                                <div className="movie-like_watch">
                                                    <button className=""></button>
                                                    <button className=""></button>
                                                </div>
                                               
                                            </div>
                                            <div className="bla-bla">
                                                <div className="container">
                                                    <div className="slick-two ">
                                                        <h1 className="title-movie">Review Movie</h1>

                                                        {
                                                            movieRecom.isFetched ? (
                                                                <Slider {...configuration}>
                                                                    {
                                                                        movieRecom.data.map((itemtwo) => (
                                                                            <div className="slick-two-wrapper">
                                                                                <div className="slider-two-wrapper container">
                                                                                    <img src={`https://image.tmdb.org/t/p/original/${itemtwo.poster_path}`} alt="" />
                                                                                    <h1>{itemtwo.title}</h1>
                                                                                </div>
                                                                            </div>
                                                                        ))
                                                                    }
                                                                </Slider>
                                                            ) : (
                                                                <h1>Loading ...</h1>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    ) : (
                        <h1>Loading ...</h1>
                    )
                }
            </div>

            <div className="container">
                <h1 className="title-movie">New Movie</h1>
                <div className="slick-three">
                    {
                        movieUpcoming.isFetched ? (
                            <Slider {...iNilush}>
                                {
                                    movieUpcoming.data.map((itemthree) => (
                                        <MovieCon
                                            imgLink={`https://image.tmdb.org/t/p/original/${itemthree.poster_path}`}
                                            movieTitle={itemthree.title}
                                            releaseDate={itemthree.release_date}
                                            id={itemthree.id}
                                            vote={itemthree.vote_average}
                                        />
                                    ))
                                }
                            </Slider>
                        ) : (
                            <h1>Loading ...</h1>
                        )
                    }
                </div>
            </div>

            <div className="container">
                {
                    movieLatest.isFetched ? (
                        <Latest
                            img={movieLatest.backdrop_path != null || movieLatest.backdrop_path != undefined ? (
                               `https://image.tmdb.org/t/p/original/${movieLatest.backdrop_path}`
                            ) :
                                    `${User}`
                            }
                            movieVote={movieLatest.data.vote_average}
                            movieTitle={movieLatest.data.title}
                            movieOverview={movieLatest.data.overview}
                            adult={movieLatest.adult}
                        />
                    ) : (
                        <h1>Loading ...</h1>
                    )
                }
            </div>

            <div className="slick-four">
                <div className="container">
                    <h1 className="title-movie">Popular by Aladin !</h1>
                    {
                        movieRecom.isFetched ? (
                            <Slider {...iNilush}>
                                {
                                    movieRecom.data.map((itemfour) => (
                                        <div className="slider-four">
                                            <MovieCon
                                                imgLink={`https://image.tmdb.org/t/p/original/${itemfour.poster_path}`}
                                                movieTitle={itemfour.title || itemfour.original_name}
                                                releaseDate = {
                                                    itemfour.release_date || itemfour.first_air_date
                                                }
                                                id={itemfour.id}
                                                vote={itemfour.vote_average}
                                            />
                                        </div>
                                    ))
                                }
                            </Slider>
                        ) : (
                            <h1>Loading ...</h1>
                        )
                    }
                </div>
            </div>

            <div className="slick-five">
                <div className="container">
                    <h1 className="title-movie">Not out yet</h1>
                    {
                        movieSlider.isFetched ? (
                            <Slider {...iNilush}>
                                {
                                    movieSlider.data.map((itemfive) => (
                                        <div className="slider-five">
                                            <MovieCon
                                                imgLink={`https://image.tmdb.org/t/p/original/${itemfive.poster_path}`}
                                                movieTitle={itemfive.original_name || itemfive.title}
                                                releaseDate={itemfive.first_air_date}
                                                id={itemfive.id}
                                                vote={itemfive.vote_average}
                                                releaseDate={itemfive.release_date}
                                            />
                                        </div>
                                    ))
                                }
                            </Slider>
                        ) : (
                            <h1>Loading ...</h1>
                        )
                    }
                </div>
            </div>



            <div className="footer">
                <div className="container">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Home