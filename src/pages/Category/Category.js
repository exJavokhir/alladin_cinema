import { useEffect, useState } from "react";
import classes from "./main.module.scss";
import axios from 'axios'

import MovieCon from "../../containers/Movie/MovieCon";

const Category = ()=>{
    const [filter, swtFilter ] = useState({
        genre: '',
        year: '',
        adult: null,
        country: ''
    }) 

    const [ filterMovie, setFilterMovie ] = useState({
        isFetched: false,
        data: {},
        error: null,
    })

     useEffect(() =>{
         axios.get(`https://api.themoviedb.org/3/search/multi`, {
             params: {
                 api_key: "9c3eab726cd61f5987bf26a9e76a226c",
                 query: filter.genre,
                 include_adult: filter.adult,
                 region: filter.country,
                 year: filter.year,
             }
         })

             .then(function (response) {
                 setFilterMovie({
                     isFetched: true,
                     data: response.data.results,
                     error: false
                 })
             })
             .catch(function (error) {
                 setFilterMovie({
                     isFetched: true,
                     data: [],
                     error: error
                 })
             })
     }, [filter])
    return(
        <div className={classes.container}>
           <div className={classes.CategoryWrapper}>
               <div className={classes.pageTitle}>
                   <h1 className={classes.pageTitleName}>Category</h1>
               </div>
               <div className={classes.movieFilter}>
                   <form>
                       <div className={classes.genre}>
                            <label htmlFor="genres">
                                Genres
                            </label>
                            <select
                                className={classes.customSelect}
                                onChange={(e) => swtFilter({ ...filter, genre: e.target.value })}
                            >
                                <option value="all">Genre</option>
                                <option value="anime">Anime</option>
                                <option value="detectiv">Detectiv</option>
                                <option value="romance">Romance</option>
                            </select>

                       </div>
                        <div className={classes.genre}>
                            <label htmlFor="country">Country</label>
                            <select
                                id="country"
                                className={classes.customSelect}
                                onChange={(e) => swtFilter({ ...filter, country: e.target.value })}

                                 >
                                <option disabled value="US">Region</option>
                                <option value="US">America</option>
                                <option value="RU">Russia</option>
                                <option value="FR">France</option>
                            </select>
                        </div>

                       <div className={classes.genre}>
                            <label htmlFor="year">Year</label>
                            <select 
                                id="year"
                                onChange={(e) => swtFilter({ ...filter, year: e.target.value })}
                                >
                                <option disabled value="year">Year</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                            </select>
                       </div>

                        <div className={classes.genre}>
                            <label htmlFor="quality">Adult</label>
                            <select 
                             id="quality"
                             onChange={(e)=>swtFilter({...filter,adult: e.target.value})}
                             >
                                <option value="fale">false</option>
                                <option value="true">true</option>
                            </select>
                        </div>

                        <div className={classes.genre}>
                            <label htmlFor="sort">
                                Sort    
                            </label>
                            <select 
                             id="sort"
                             >
                                <option value="Rating">Rating</option>
                                <option value="Popular">Popular</option>
                                <option value="Upcoming">Upcoming</option>
                                <option value="Last">Last</option>
                            </select>
                        </div>
                   </form>
               </div>
           </div>

            <div className={classes.filter_movies}>
               {
                   filterMovie.isFetched ? (
                       filterMovie.data.slice(0, 18).map(item=>(
                           <MovieCon
                               imgLink={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                               movieTitle={item.title}
                               releaseDate={item.release_date}
                               id={item.id}
                               vote={item.vote_average}
                           />
                       ))
                   ):(
                        <h1>Salom</h1>
                   )
               }
           </div>
        </div>
    )
}

export default Category;