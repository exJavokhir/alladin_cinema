import './main.scss'
import Footer from '../../containers/Footer/Footer'
import Snowball from '../../assets/images/snowball.png'
const Children  =  ()=>{
    return(
        <div className="child-wrapper">
            <div className="container">
                <div className="error-page"
                    style={
                        {
                            backgroundImage: `url(${Snowball})`
                        }
                    }
                >
                    <div className="error-block">
                        <h1 className="error-title-one">OOOPS...DON’T be SAD.</h1>
                        <h2 className="error-title-two">It's just a 404 Error! </h2>
                        <h2 className="error-title-two">What you’re looking for may have been misplaced in Long</h2>
                        <h2 className="error-title-two">Term Memory.</h2>
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

export default Children;