import React, {Component} from 'react';
import Like from "./common/like";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import {getMovies} from "../services/fakeMovieService";
import {getGenres} from "../services/fakeGenreService";
import {paginate} from "../utilis/paginate"

class Movie extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1
    };

    componentDidMount() {
        this.setState({movies: getMovies(), genres:getGenres()})
    }

    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies})
    };

    handleOnLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies})
    }

    handlePageChange = (page) => {
        this.setState({currentPage: page})
    }

    handleOnItemSelect = (item) => {
        console.log(item);
    }

    render() {

        const {length: count} = this.state.movies;
        const {currentPage, pageSize, movies: allMovies} = this.state;

        if (count === 0) {
            return <h1> There is no movies in database</h1>
        }

        const movies = paginate(allMovies, currentPage, pageSize);

        return (
            <main className="container row">
                <div className="col-3">
                    <ListGroup
                        items={this.state.genres}
                        onItemSelect={this.handleOnItemSelect}
                    />
                </div>
                <div className="col">
                    <p>We hae got {count} movies</p>
                    <table className="table">
                        <thead className="thead-dark">
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th/>
                            <th/>
                        </tr>
                        </thead>
                        <tbody>
                        {movies.map(element => (
                            <tr key={element._id}>
                                <td> {element.title} </td>
                                <td> {element.genre.name} </td>
                                <td> {element.numberInStock} </td>
                                <td> {element.dailyRentalRate} </td>
                                <td><Like like={element.liked} onClick={() => {
                                    this.handleOnLike(element)
                                }}/></td>
                                <td>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => this.handleDelete(element)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>

                    </table>
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}
                    />
                </div>
            </main>
        );
    }
}

export default Movie;