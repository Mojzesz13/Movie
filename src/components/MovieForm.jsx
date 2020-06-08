import React from 'react';
import Form from "./common/form";
import Joi from "joi-browser";
import {getMovies, saveMovie} from "../services/fakeMovieService";
import {getGenres} from "../services/fakeGenreService";

class MovieForm extends Form {
    state = {
        data: {
            title: "",
            genreId: "",
            numberInStock: "",
            dailyRentalRate: ""
        },
        errors: {},
        genres: []
    };

    schema = {
        _id: Joi.string(),
        title: Joi.string()
            .required()
            .label("Title"),
        genreId: Joi.string()
            .required()
            .min(5)
            .max(30)
            .label("Genre"),
        numberInStock: Joi.string()
            .required()
            .min(0)
            .max(100)
            .label("Number In Stock"),
        dailyRentalRate: Joi.number()
            .required()
            .min(0)
            .max(10)
            .label("Daily Rental Rate")
    };

    componentDidMount() {
        const genres = getGenres();
        this.setState({genres})

        const movieId = this.props.match.params.id;
        if (movieId === "new") return;

        const movie = getMovies(movieId);
        if (!movie) return this.props.history.replace("/not-found");

        this.setState({data: this.mapToViewModel(movie) });
    }

    mapToViewModel(movie) {
        return {
            _id: movie._id,
            title: movie.title,
            genreId: movie.genreId,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate,
        };
    }

    doSubmit = () => {
        saveMovie(this.state.data);

        this.props.history.push("/movies");
    }

    render() {
        return (
            <>
                <h1>
                    Movies Form
                </h1>
                <form onSubmit={this.doSubmit}>
                    {this.renderInput("title", "Title")}
                    {this.renderSelect("genre", "Genre", this.state.genres)}
                    {this.renderInput("numberInStock", "Number In Stock")}
                    {this.renderInput("rate", "Rate")}
                    {this.renderButton("Save")}
                </form>

            </>
        );
    }
}

export default MovieForm;

