import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Like from "./common/like";
import Table from "./common/table";

class MoviesTable extends Component {
    columns = [
        {
            path: "title",
            label: "Title",
            content: movies => <Link to={`/movies/${movies._id}`}>{movies.title}</Link>
        },
        {path: "genre.name", label: "Genre"},
        {path: "numberInStock", label: "Stock"},
        {path: "dailyRentalRate", label: "Rate"},
        {
            key: "like",
            content: movie => <Like like={movie.liked} onClick={() =>
                this.props.onLike(movie)}/>
        },
        {
            key: "delete",
            content: movie => <button
                className="btn btn-danger btn-sm"
                onClick={() => this.props.onDelete(movie)}
            >
                Delete
            </button>
        }
    ];

    render() {
        const {movies, onSort, sortColumn} = this.props

        return <Table
            data={movies}
            onSort={onSort}
            sortColumn={sortColumn}
            columns={this.columns}
        />
    }
}

export default MoviesTable;