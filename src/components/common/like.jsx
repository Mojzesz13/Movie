import React from 'react';

const Like = ({like, onClick}) => {
    let classes = "fa fa-heart";
    if (!like) classes += "-o";

    return (
        <i
            onClick={onClick}
            style={{cursor: "pointer"}}
            className={classes}
            aria-hidden="true"
        />
    );
}

export default Like;