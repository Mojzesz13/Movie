import React, {Component} from 'react';
import MoviesTable from "./moviesTable";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import SearchBox from "./common/searchBox";
import {getMovies} from "../services/fakeMovieService";
import {getGenres} from "../services/fakeGenreService";
import {paginate} from "../utilis/paginate";
import {Link} from "react-router-dom";
import _ from "lodash";

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
        searchQuery: "",
        selectedGenre: null,
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
        this.setState({selectedGenre: genre, searchQuery: "", currentPage: 1});
    };

    handleOnSort = (sortColumn) => {
        this.setState({sortColumn})
    };

    handleOnSearch = (query) => {
        this.setState({searchQuery: query, selectedGenre: null, currentPage: 1});
    }

    render() {
        const {length: count} = this.state.movies;

        const {
            currentPage,
            pageSize,
            sortColumn,
            selectedGenre,
            searchQuery,
            movies: allMovies
        } = this.state;

        if (count === 0) return <h1 className="m-5">There is no movies in database</h1>;

        let filtered = allMovies;
        if (searchQuery)
            filtered = allMovies.filter(m =>
                m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
            );

        else if (selectedGenre && selectedGenre._id)
            filtered = allMovies.filter(m => m.genre._id === selectedGenre._id);

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
                    <Link
                        to="/movies/new"
                        className="btn btn-primary"
                        style={{marginBottom: 20}}
                    >
                        New Movie
                    </Link>
                    <p>We hae got {filtered.length} movies</p>
                    <SearchBox value={this.searchQuery} onChange={this.handleOnSearch}/>
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

export default Movies;