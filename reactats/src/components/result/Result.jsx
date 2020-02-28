import React, {Component} from 'react';
import './result.scss';


class Result extends Component{

    render(){
        if(this.props.title){
            return (
                <div className="rez">
                    <img src={this.props.poster}></img>
                    <h1>{this.props.title}</h1>
                    <h3>Year:<br/></h3> <p>{this.props.year}</p>
                    <h3>Released:<br/></h3> <p>{this.props.released}</p>
                    <h3>Runtime:<br/></h3> <p>{this.props.runtime}</p>
                    <h3>Genre:<br/></h3> <p>{this.props.genre}</p>
                    <h3>Director:<br/></h3> <p>{this.props.director}</p>
                    <h3>Actors:<br/></h3> <p>{this.props.actors}</p>
                    <h3>Plot:<br/></h3> <p>{this.props.plot}</p>
                    <h3>Awards:<br/></h3> <p>{this.props.awards}</p>
                </div>
            )
        }else{
            return(
                <div className="rez">
                </div>
            )
        }
    }


}

export default Result;