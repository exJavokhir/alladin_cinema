import {
  Switch,
  Route
} from 'react-router-dom'
import {
  Category,
  Children,
  News,
  Mymovies,
  Subscriber,
  Home,
  Singlemovie
} from './pages'

import Header from './containers/Header'
import Search from './pages/Search/Search'

import './assets/styles/main.scss'
import { useState } from 'react'
function App() {
  setTimeout(() => {
    let progres = document.querySelector('.progressbar')
    let totalHeight = document.body.scrollHeight - window.innerHeight
    window.onscroll = function () {
      let progressHeight = (window.pageYOffset / totalHeight) * 100
      progres.style.height = progressHeight + '%'
    }
  }, 1)
  
  const [ wishList, setWishList ] = useState(window.localStorage.getItem('wishlist') ? window.localStorage.getItem('wishlist') :[])
 
  return (
    <div className="App">
     
      <div className="progressbar">
      </div>
      <div id="scrollPath"></div>

      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={News} />
        <Route exact path="/category" component={Category} />
        <Route exact path="/tv" component={Subscriber} />
        <Route exact path="/mymovies" component={Mymovies} />
        <Route exact path="/children" component={Children} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/singlemovie/:id" component={Singlemovie} />
      </Switch>

      
    </div>

    
  )

  

 
}

export default App;
