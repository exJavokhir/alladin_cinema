import Star from '../../assets/images/icons/star.png'
import Star2 from '../../assets/images/icons/start2.png'
import Fuckimg from '../../assets/images/fuckimg.png'

import './main.scss'
 

const Latest = ({movieVote, movieTitle, movieOverview, img, adult})=>{
    return(
        <div className="recently-wrapper">
            <div className="inner-recently">
                <div className="left">
                    <img src={img} alt="" />
                </div>
                <div className="right">
                    <div className="top">
                        <button className="btn-one">Execlusive</button>
                        <button className="btn-one">{
                            adult == false ? '14+' : '18+'
                        }</button>
                        <button className="btn-one white" >FULL HD</button>
                    </div>
                    <div className="midle">
                        <div className="left-side">
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star2} alt=""/>
                        </div>
                        <div className="right-side">
                            <span>{movieVote}</span>
                            <h3>MovieSearch</h3>
                        </div>
                    </div>
                    <h1 className='fuck-title'>{movieTitle}</h1>
                    <p className="fuck-over">{movieOverview ? movieOverview : 'Short 8mm film by Mitsuhiko Kawamura made in the third year of university. A twenty year old broken heart, Showa romance.'}
                    </p>
                    <div className="buttonss">
                        <button className="btn-blue">Watch by Subscription</button>
                        <button className="btn-trans">Add to Favourite</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Latest