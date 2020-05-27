import React from 'react';

const ListGroup = (props) => {
    const {
        items,
        textProperty,
        valueProperty,
        selectedItem,
        onItemSelect
    } = props;

    return (
        <div>
            <ul className="list-group-md">
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