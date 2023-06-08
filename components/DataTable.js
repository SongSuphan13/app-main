import React from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';

const DataTable = ({ columns, data }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        nextPage,
        previousPage,
        state: { pageIndex },
        gotoPage,
    } = useTable({ columns, data}, useSortBy, usePagination);
    
    const renderPageItems = () => {
        const items = [];
        for (let i = 0; i < pageOptions.length; i++) {
          items.push(
            <li key={i} className={`paginate_button page-item ${pageIndex === i ? 'active' : ''}`}>
                <button className={`page-link `+i} onClick={() => setPageIndex(i)}>{i + 1}</button>
            </li>
          );
        }
        return items;
    };
    
    const setPageIndex = index => {
        gotoPage(index);
    };
    return (
        <>
            <div id="sampleTable_wrapper" className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="dataTables_length" id="sampleTable_length">
                            <label>
                                Show
                                <select name="sampleTable_length" aria-controls="sampleTable" className="form-control form-control-sm">
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </select>
                                entries
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <table key="1" className="table table-bordered dataTable" {...getTableProps()}>
                        <thead className="th-primary nobr">
                            {headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())} width={column.width} className={(column.className?column.className+" ":'')+(column.isSorted  ? column.isSortedDesc ? 'sorting_asc'  : 'sorting_asc' : 'sorting')} >
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
                                            <td {...cell.getCellProps()} className={cell.column.bodyClass} >{cell.render('Cell')}</td>
                                        ))}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-5">
                        <div className="dataTables_info" id="sampleTable_info" role="status" aria-live="polite">
                            Showing {pageIndex + 1} to {pageOptions.length} of {rows.length}  entries
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-7">
                        <div className="dataTables_paginate paging_simple_numbers" id="sampleTable_paginate">
                            <ul className="pagination">
                                <li className={`paginate_button page-item previous ${!canPreviousPage ? 'disabled' : ''}`} id="sampleTable_previous">
                                    <button onClick={previousPage} disabled={!canPreviousPage} className="page-link">
                                        Previous
                                    </button>
                                </li>
                                {renderPageItems()}
                                <li className={`paginate_button page-item next ${!canNextPage ? 'disabled' : ''}`} id="sampleTable_next">
                                    <button onClick={nextPage} disabled={!canNextPage} className="page-link">
                                        Next
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DataTable;
