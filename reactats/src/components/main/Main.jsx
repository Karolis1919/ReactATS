import React, {Component} from 'react';
import Result from "../result/Result";
import './main.scss';


class Main extends Component{
    constructor(){
        super()
        this.state = {
            movies: "",
            input: ""
        }

        this.handleChangeMovies = this.handleChangeMovies.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeMovies(event){
        this.setState({input: event.target.value});
    }

    handleSubmit(event){
        fetch("https://www.omdbapi.com/?apikey=e4db3ced&t="+this.state.input)
            .then(response => response.json())
            .then(data =>{
                this.setState({
                    movies: data
                })
            });
        event.preventDefault();
    }
    render(){
        console.log(this.state.movies);
        return (
            <main>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" id="search" placeholder="What are you looking for?" value={this.state.input} onChange={this.handleChangeMovies}/>
                        <button className="submit" id="click" value="Submit">Search</button>
                    </form>
                    <Result
                        poster = {this.state.movies.Poster}
                        title = {this.state.movies.Title}
                        year = {this.state.movies.Year}
                        released = {this.state.movies.Released}
                        runtime = {this.state.movies.Runtime}
                        genre = {this.state.movies.Genre}
                        director = {this.state.movies.Director}
                        actors = {this.state.movies.Actors}
                        plot = {this.state.movies.Plot}
                        awards = {this.state.movies.Awards}
                    />
                </div>
            </main>
        )
    }


}

export default Main;