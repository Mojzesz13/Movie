import React from 'react';

const ListGroup = (props) => {
    const {items, textProperty, valueProperty, onItemSelect} = props;

    return (
        <div>
            <ul className="list-group-md">
                {items.map(e => <li
                                    onClick={()=> onItemSelect(e)}
                                    key={e[valueProperty]}
                                    className="list-group-item">
                    {e[textProperty]}</li>
                )}
            </ul>
        </div>
    );
};

ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
}

export default ListGroup;