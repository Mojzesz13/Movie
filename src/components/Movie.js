import React, {Component} from 'react';
import {getMovies} from "../services/fakeMovieService";
import Like from "./like"

class Movie extends Component {
    state = {
        movies: getMovies(),
    };

    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies})
    };

    movieList = () => {
        return this.state.movies.map(element =>
            <tr key={element._id}>
                <td> {element.title} </td>
                <td> {element.genre.name} </td>
                <td> {element.numberInStock} </td>
                <td> {element.dailyRentalRate} </td>
                <td> <Like movies={this.state.movies}/></td>
                <td>
                    <button type="button" className="btn btn-danger btn-sm" onClick={() => this.handleDelete(element)}>Delete</button>
                </td>
            </tr>);
    }

    render() {

        const {length: count} = this.state.movies;

        if(count === 0) {
            return <h1> There is no movies in database</h1>
        }

        return (
            <main className="container">
                <p>We hae got {count} movies</p>
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                        <th scope="col"/>
                    </tr>
                    </thead>
                    <tbody>
                    {this.movieList()}
                    </tbody>
                </table>
            </main>
        );
    }
}

export default Movie;