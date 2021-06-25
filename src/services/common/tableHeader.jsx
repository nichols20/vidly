import React, { Component } from 'react';

class TableHeader extends Component {

    raiseSort = path => {
        // this function takes the sortcolumn object from the state of movies then reapplies it to a copy const of sortColumn
        const sortColumn = {...this.props.sortColumn}
        //if the path of sortcolumn equals the path object thrown in the raiseSort function the sortColumn order
        //will be descending if the order is ascending and if it's ascending it will change to descending
        if (sortColumn.path === path)
          sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc'
        //elsewise the sortColumn.path will equal the path object thrown to function parameter and the sortColumn order will be ascending. 
        else {
          sortColumn.path = path
          sortColumn.order = 'asc'
        }
        //then finally we call the onSort function and pass the new sortColumn object.
        this.props.onSort(sortColumn)
    }

    render() { 
        return (  );
    }
}
 
export default TableHeader;