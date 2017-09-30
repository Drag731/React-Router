import React, { Component } from 'react'
import './App.css';
import ItemMovie from './ItemMovie.js';
import Description from './Description.js';
import movies from './data.js';


export default class Movies extends Component {
    constructor(props){
        super(props);
        const selectedId = movies && movies[0] && movies[0].id;
        this.state = {
          activeId: selectedId,
          movies: props.movies,
          likeCount: '',
          route: window.location.hash.substr(1)
        };
        this.change = this.change.bind(this);
        this.likeUp = this.likeUp.bind(this);
        this.likeDown = this.likeDown.bind(this);
    }

    change(id) {
        this.setState({activeId: id});
    }

    likeUp() {
        this.setState({likeCount: 'up'});
    }

    likeDown() {
        this.setState({likeCount: 'down'});
    }


  render() {
     const activeMovie = movies.filter((el) => el.id === parseInt(this.state.activeId, 10))[0];
    return (
        <div className="movies">   
            <div className="movies-left">
                <div className="sort-movies">
                    <h2>Sort movies</h2>
                    <div className="buttons">
                        <button>By likes</button>
                        <button>By rating</button><br/>
                        <input className="search" type="search" /> 
                    </div>
                </div>
                {movies.map((movie) => {
                    return (<ItemMovie 
                      key={movie.id} 
                      currentMovie={movie} 
                      change={this.change}
                      likeUp={this.likeUp}
                      likeDown={this.likeDown}
                      /> );
                })}
                
            </div>
                <Description 
                  key={movies.id} 
                  activeMovie={activeMovie} 
                  change={this.change}
                  movies={movies}
                />
        </div>
    )
  }
}