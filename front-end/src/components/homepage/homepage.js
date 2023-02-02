import "./homepage.css";
import React, { useMemo } from 'react'
import { useTable, useGlobalFilter,usePagination } from 'react-table'
import MOCK_DATA from '../MOCK_DATA.json'
import { COLUMNS } from '../columns'
import { GlobalFilter } from "../Globalfilter";

const Homepage =({setLoginUser})=>{
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    prepareRow,
    canPreviousPage,
    canNextPage,
    state,
    setGlobalFilter,
  } = useTable({
    columns,
    data
  },useGlobalFilter,usePagination)

  const {globalFilter} = state;

  return (
    <>
    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
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
          {page.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="buttons">
        <button onClick={()=> previousPage()} disabled={!canPreviousPage}>Previous</button>
        <button onClick={()=> nextPage()} disabled={!canNextPage}>Next</button>
        <button  onClick={() => setLoginUser({})} >Logout</button>
      </div>
      <div className="footer">
            <h1>ADRIXUS DASHBOARD</h1>
      </div>
    </>
  )
}

export default Homepage;