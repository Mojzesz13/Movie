import React, {Component} from 'react';

class TableHeader extends Component {
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

    renderSortIcon = column => {
        const {sortColumn} = this.props

        if(column.path !== sortColumn.path) return null;
        if(sortColumn.order === "asc") return <i className="fa fa-sort-asc m-1"></i>;
        return <i className="fa fa-sort-desc m-1"></i>;
    };

    render() {
        return (
            <thead>
            <tr>
                {this.props.columns.map(column =>
                    (<th className="clickable"
                            key={column.path || column.key}
                         onClick={() => this.riseSort(column.path)}
                    >
                        {column.label}{this.renderSortIcon(column)}
                    </th>
                    ))}
            </tr>
            </thead>
        );
    }
}

export default TableHeader;