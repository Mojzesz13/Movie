import React, {Component} from 'react';
import MoviesTable from "./moviesTable";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import {getMovies} from "../services/fakeMovieService";
import {getGenres} from "../services/fakeGenreService";
import {paginate} from "../utilis/paginate";
import _ from "lodash";

class Movie extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
        sortColumn: {path: "title", order: "asc"}
    };

    componentDidMount() {
        const genres = [{_id: "", name: "All Genres"}, ...getGenres()];
        this.setState({movies: getMovies(), genres});
    };

    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies});
    };

    handleOnLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies});
    };

    handlePageChange = (page) => {
        this.setState({currentPage: page});
    };

    handleOnItemSelect = (genre) => {
        this.setState({selectedGenre: genre, currentPage: 1});
    };

    handleOnSort = (sortColumn) => {
        this.setState({sortColumn})
    };

    render() {
        const {length: count} = this.state.movies;

        const {
            currentPage,
            pageSize,
            sortColumn,
            selectedGenre,
            movies: allMovies
        } = this.state;

        if (count === 0) return <h1>There is no movies in database</h1>;

        const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const movies = paginate(sorted, currentPage, pageSize);

        return (
            <main className="container row m-2">
                <div className="col-3">
                    <ListGroup
                        items={this.state.genres}
                        onItemSelect={this.handleOnItemSelect}
                        selectedItem={this.state.selectedGenre}
                    />
                </div>
                <div className="col">
                    <p>We hae got {filtered.length} movies</p>
                    <MoviesTable
                        movies={movies}
                        sortColumn={sortColumn}
                        onLike={this.handleOnLike}
                        onDelete={this.handleDelete}
                        onSort={this.handleOnSort}
                    />
                    <Pagination
                        itemsCount={filtered.length}
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