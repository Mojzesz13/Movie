import React, {Component} from 'react';
import _ from 'lodash';

class TableBody extends Component {
    renderCell = (element, column) => {
        if (column.content) return column.content(element)
        return _.get(element, column.path)
    }

    render() {
        const {data, columns, valueProperty} = this.props;

        const createKey = (element, column) => {
            return element[valueProperty] + (column.path || column.key)
        }

        return (
            <tbody>
            {data.map(element => (
                <tr key={element[valueProperty]}>
                    {columns.map(column =>
                        <td key={createKey(element, column)}>
                            {this.renderCell(element, column)}
                        </td>
                    )}
                </tr>
            ))}
            </tbody>
        );
    }
}

TableBody.defaultProps = {
    valueProperty: "_id"
};

export default TableBody;