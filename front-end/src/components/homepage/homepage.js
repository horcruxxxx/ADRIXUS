import "./homepage.css";
import React, { useMemo,useState } from 'react'
import { useTable, useGlobalFilter,usePagination } from 'react-table'
import MOCK_DATA from '../MOCK_DATA.json'
import { COLUMNS } from '../columns'
import { GlobalFilter } from "../Globalfilter";

const Homepage =({setLoginUser})=>{

  const [sortedData, setSortedData] = useState(MOCK_DATA);

  const onSortingChange = (e) => {
    // console.log(sortedArray);
    const sortKey = e.target.value;
    const sortedArray = [...MOCK_DATA];
    console.log(sortedArray);
    let temp = [];
    // console.log(sortKey);
    switch (sortKey) {
      case "Fname":
        // console.log("1");
        sortedArray.sort((a, b) => {
          if (a.fname < b.fname) return -1;
          if (a.fname > b.fname) return 1;
          return 0;
        });
        break;
      case "Lname":
        // console.log("2");
        sortedArray.sort((a, b) => {
          if (a.lname < b.lname) return -1;
          if (a.lname > b.lname) return 1;
          return 0;
        });
        break;
      case "Email":
        // console.log("3");
        sortedArray.sort((a, b) => {
          if (a.email < b.email) return -1;
          if (a.email > b.email) return 1;
          return 0;
        });
        break;
      default:
        // console.log("none");
        break;
    }
    // console.log(temp);
    setSortedData(sortedArray);
  };

  const columns = COLUMNS;// useMemo(() => COLUMNS, [])
  const data = sortedData;// useMemo(() => sortedData, [])

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
      <div className="sort-section">
      Sort by: 
        <select onChange={(e)=>onSortingChange(e)}>
          <option value=''>Select Option</option>
          <option value='Fname'>First Name</option>
          <option value='Lname'>Last Name</option>
          <option value='Email'>Email</option>
        </select>
      </div>
      <div className="footer">
            <h1>ADRIXUS DASHBOARD</h1>
      </div>
    </>
  )
}

export default Homepage;