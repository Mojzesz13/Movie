import React from 'react';

const SearchBox = ({value, onChange}) => {
    return (
        <div className="form-group">
            <input
                name="query"
                type="text"
                className="form-control my-3"
                placeholder="Search..."
                value={value}
                onChange={e => onChange(e.currentTarget.value)}/>
        </div>
    );
};

export default SearchBox;