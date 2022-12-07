import React from "react";
import { useTable, usePagination, useGlobalFilter, useAsyncDebounce } from "react-table";
import * as BiIcons from 'react-icons/bi';

const Table = ({ columns, data }) => {
    // Use the state and functions returned from useTable to build your UI
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      prepareRow,
      page, // Instead of using 'rows', we'll use page,
      // which has only the rows for the active page
  
      // The rest of these things are super handy, too ;)
      canPreviousPage,
      canNextPage,
      pageOptions,
      pageCount,
      gotoPage,
      nextPage,
      previousPage,
      setPageSize,
      preGlobalFilteredRows,
      globalFilter,
      setGlobalFilter,
      state: { pageIndex, pageSize }
    } = useTable(
      {
        columns,
        data,
        initialState: { pageIndex: 0 },
      },
      useGlobalFilter,
      usePagination
    );

    const count = preGlobalFilteredRows.length;
    const [value, setValue] = React.useState(globalFilter);
    const onChange = useAsyncDebounce(value => {
      setGlobalFilter(value || undefined)
    }, 200);
  
    // Render the UI for your table
    return (
      <>
        <div className="search-wrapper">
            <div className="icon-search-wrapper">
              <BiIcons.BiSearch className="icon-search"/>
            </div>
            <input
              value={value || ""}
              onChange={e => {
                setValue(e.target.value);
                onChange(e.target.value);
              }}
              placeholder={`Cari`}
            />
        </div>
        <div className="button-group">
          <button>
            Download Excel
          </button>

          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
        <table {...getTableProps()}>
          <thead>
              {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                      <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                  </tr>
              ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                  <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* 
          Pagination can be built however you'd like. 
          This is just a very basic UI implementation:
        */}
        <div className="pagination">
          <div className="btn-pagination">
            <BiIcons.BiChevronsLeft className="icon-pagination" onClick={() => gotoPage(0)} disabled={!canPreviousPage}/>
          </div>
          <div className="btn-pagination">
            <BiIcons.BiChevronLeft className="icon-pagination" onClick={() => previousPage()} disabled={!canPreviousPage}/>
          </div>
          <span>
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </span>
          <div className="btn-pagination">
            <BiIcons.BiChevronRight className="icon-pagination" onClick={() => nextPage()} disabled={!canNextPage}/>
          </div>
          <div className="btn-pagination">
            <BiIcons.BiChevronsRight className="icon-pagination" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}/>
          </div>
        </div>
      </>
    );
  }

  export default Table;