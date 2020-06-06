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
        const genres = [...getGenres()];
        const data = [...getMovies()];
        this.setState({data, genres})
    }

    doSubmit = () => {
        this.props.history.replace("/movies");
    }

    render() {
        return (
            <>
                <h1>
                    Movies Form
                    {/*{this.props.match.params.id}*/}
                </h1>
                <form onSubmit={this.doSubmit}>
                    {this.renderInput("title", "Title")}
                    {this.renderInput("genre", "Genre")}
                    {this.renderInput("numberInStock", "Number In Stock")}
                    {this.renderInput("rate", "Rate")}
                    {this.renderButton("Save")}
                </form>

            </>
        );
    }
}

export default MovieForm;

