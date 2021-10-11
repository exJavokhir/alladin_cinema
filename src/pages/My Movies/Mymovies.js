import { useState } from 'react';
import './main.scss'

import MovieCon from '../../containers/Movie/MovieCon'
import Footer from '../../containers/Footer/Footer'

const MyMovies = ()=>{
    const [datas, setDatas] = useState(
        window.localStorage.length > 0
            ? JSON.parse(window.localStorage.getItem("wishlist"))
            : []
    );
    const removeMovie = (id) => {
        const deletedMovie = datas.filter((el) => el.id !== id);
        setDatas(deletedMovie);
        window.localStorage.setItem("wishlist", JSON.stringify(deletedMovie));
        console.log(deletedMovie);

    }
    return(
        <div className="my_movies">
            <div className="container">
                <div className="page_title">
                    <h1 className="page-names">
                        My Movies
                    </h1>
                </div>
                <div className="flex-blocks">
                    {
                        datas.map(item => (
                            <MovieCon
                                imgLink={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                                id={item.id}
                                releaseDate={item.release_date}
                                movieTitle={item.title}
                                removeMovie={removeMovie}
                                vote={item.vote_average}
                                remove={true}
                            />
                        ))
                    }
                </div>
            </div>

            <footer className="footer">
                <div className="container">
                    <Footer/>
                </div>
            </footer>
        </div>
    )
}

export default MyMovies;