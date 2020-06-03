import React from 'react';

const MovieForm = ({match, history}) => {
    const handleSave = () => {
        history.replace("/movies");
    }

    return (
        <>
            <h1>
                Movies form {match.params.id}
            </h1>
            <button className="btn badge-primary" onClick={handleSave}>Save</button>
        </>
    );
}

export default MovieForm;