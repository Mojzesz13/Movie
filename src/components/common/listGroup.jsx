import React from 'react';

const ListGroup = ({items, textProperty, valueProperty, selectedItem, onItemSelect}) => {
    return (
        <div>
            <ul className="list-group-md m-2 clickable">
                {items.map(e => <li
                                    key={e[valueProperty]}
                                    onClick={()=> onItemSelect(e)}
                                    className={e === selectedItem ? "list-group-item active" : "list-group-item"}
                    >
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