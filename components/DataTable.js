import React,{useState} from 'react';
import { useTable, useSortBy } from 'react-table';

const DataTable = ({ columns, data = [] ,onLimitChange}) => {
    const [limit, setLimit] = useState(10);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow, 
        setFilter,
    } = useTable({ columns, data } ,useSortBy );

    const handleLimitChange = (e) => {
        setLimit(parseInt(e.target.value));
        if (onLimitChange) {
            onLimitChange(parseInt(e.target.value));
        }
    };

    const handleSort = (column) => {
        // const isSorted = column.isSorted ? (column.isSortedDesc ? 'desc' : 'asc') : 'asc'
        // console.log(column);
        // fetchData(column.id);
    };

    return (
        <>
            <div id="sampleTable_wrapper" className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer">
                {/* <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="dataTables_length" id="sampleTable_length">
                            <label>
                                Show
                                <select className="form-control form-control-sm" onChange={handleLimitChange} >
                                    <option value={10}>10</option>
                                    <option value={25}>25</option>
                                    <option value={50}>50</option>
                                    <option value={100}>100</option>
                                </select>
                                entries
                            </label>
                        </div>
                    </div>
                </div> */}
                <div className="row">
                    <table className="table table-bordered dataTable" {...getTableProps()}>
                        <thead className="th-primary nobr">
                            {headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => (
                                        <th  key={column.id} {...column.getHeaderProps(column.getSortByToggleProps())} 
                                            width={column.width} 
                                            className={(column.isSorted  ? column.isSortedDesc ? 'sort-desc'  : 'sort-asc' : '')} 
                                            onClick={() => handleSort(column)} 
                                        >
                                            {column.render('Header')}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {rows.map(row => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()} >
                                        {row.cells.map(cell => (
                                            <td key={cell.row.id}  {...cell.getCellProps()} className={cell.column.className} >{cell.render('Cell')}</td>
                                        ))}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default DataTable;
