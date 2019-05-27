import React from 'react';
import {BrowserRouter, Route, Switch } from "react-router-dom";
import MovieList from './components/movie-list'
import Error from './components/error'
import MovieDetail from './components/movie-detail'
import Search from './components/search'

class App extends React.Component {

  render() {
    return (
        <div>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={MovieList} />
              <Route path="/movie-detail/:id" component={MovieDetail} />
              <Route path="/search/:search" component={Search} />
              <Route component={Error} />
            </Switch>
          </BrowserRouter>
          <footer className="ps-Clear-Fix" style={{display: 'block', height: '100px', width: '100%', backgroundColor: '#333545', marginTop: '20px'}}>
          </footer>
        </div>
    );
  }
}

export default App;
