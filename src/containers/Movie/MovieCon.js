import { Link } from 'react-router-dom'
import './main.scss'
import Trash from '../../assets/icons/trash.png'

import Play from '../../assets/icons/play.svg'


const MovieCon = ({ imgLink, releaseDate, movieTitle, id, vote, remove, removeMovie }) => {


    return (
        <div className="slick-three-wrapper">
            <Link to={`/singlemovie/${id}`}>
                <div className="slider-three-wrapper">
                    <img src={imgLink} alt="" />
                    <h6 className="vote_average">{vote}</h6>
                    <h3>{movieTitle}</h3>
                    <span>{releaseDate}</span>
                    <button className="watch_movie">
                        <img src={Play} alt="" />
                    </button>

                </div>
            </Link>
            {
                remove ? (
                    <button
                        className="remove-btn"
                        onClick={() =>
                            removeMovie(id)
                        }
                    ><img src={Trash} alt="" /></button>
                ) : null
            }
        </div>
    )
}

export default MovieCon