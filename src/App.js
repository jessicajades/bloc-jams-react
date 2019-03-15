import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './landing.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <Link to='/' ><img src="http://i67.tinypic.com/2qvutew" className="logo" /></Link>
            <Link to='/library' className="link">Library</Link>
          </nav>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
