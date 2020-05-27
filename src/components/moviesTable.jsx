import React, {Component} from 'react';
import Like from "./common/like";

class MoviesTable extends Component {
    riseSort = path => {
        const sortColumn = {...this.props.sortColumn};
        if (sortColumn.path === path)
            sortColumn.order = (sortColumn.order === "asc") ? "desc" : "asc";
        else {
            sortColumn.path = path;
            sortColumn.order = "asc";
        }
        this.props.onSort(sortColumn);
    };

    render() {
        const {movies, onLike, onDelete} = this.props

        return (
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th onClick={() => this.riseSort("title")}>Title</th>
                    <th onClick={() => this.riseSort("genre.name")}>Genre</th>
                    <th onClick={() => this.riseSort("numberInStock")}>Stock</th>
                    <th onClick={() => this.riseSort("dailyRentalRate")}>Rate</th>
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
                            onLike(element)
                        }}/></td>
                        <td>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => onDelete(element)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }
}

export default MoviesTable;