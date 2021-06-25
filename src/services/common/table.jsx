import React from 'react';
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = (props) => {
    const {columns, sortColumn, onSort, data} = props

    return ( 
     <table className ='table'>
        <TableHeader sortColumn={sortColumn} onSort={onSort} columns={columns}/>
        <TableBody columns={columns} data={data}/>
     </table>
     );
}
 
export default Table;