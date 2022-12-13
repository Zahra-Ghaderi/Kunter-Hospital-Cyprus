import React, { useState, useEffect, useRef } from "react";
//import { useState } from 'react';
import "./PatientsDebt.css";
import ComponentHeader from "../CustomComponents/ComponentHeader";
//import SearchBar from "../CustomComponents/SearchBar";
import axios from "axios";
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { AgGridReact } from 'ag-grid-react';
import ReactDOM from 'react-dom'

const PatientsDebt = () => {


  //   constructor() {
  //   super(1);
  //    this.fetchData()
  //  }

  function fetchData() {
    return axios.get("http://localhost:8090/api/srvs")
      .then((response) => {
        debugger
        //  setRowData(rowData)
        // this.rows = response.data;
        // this.showgrid =true;
        debugger
      }).catch(c => {
        debugger
      })
  }

  /*export interface PatientsDebtProps {
    toBeSearched: string;
    //PatientsDebt: PatientsDebt[];
  }*/


  const gridRef = useRef(); // Optional - for accessing Grid's API
  const [rowData, setRowData] = useState();


  const pagination = true;

  const [columnDefs, setColumnDefs] = useState([
    { field: 'Servis_Id', filter: true, floatingFilter: true, editable: true, cellEditor: 'agTextCellEditor' },
    { field: 'Servis_Name', filter: true, floatingFilter: true , cellEditorPopup: true},
    { field: 'Required_Session', filter: true, floatingFilter: true },
    { field: 'Price', filter: true, floatingFilter: true },
    { field: 'Delete' }
  ]);

  useEffect(() => {
    fetch('http://localhost:8090/api/srvs')
      .then(result => result.json())
      .then(rowData => setRowData(rowData))
  }, []);


  return (
    <div>
      <div className="ag-theme-alpine" style={{ height: 450, width: 930 }}>
        <ComponentHeader header="Borçlu Hastalar" />
        {/* {this.showgrid == true ?
         <div  className="place-content-center">
         <Box sx={{ height: 450, width: '100%', MdBorderColor: 'purple' }}>
           <DataGrid 
           getRowId={(row:any)=>row.Servis_Id}
             className="styled-table bg-purple-200 border-purple-900"
             rows={this.rows}
             columns={this.columns}
             pageSize={6}
             rowsPerPageOptions={[5]}
             //checkboxSelection
             disableSelectionOnClick
             experimentalFeatures={{ newEditingApi: true }}
           />
         </Box>
       </div>
        :<div></div>} */}
        <AgGridReact
          pagination={pagination}
          //  ref={gridRef} // Ref for accessing Grid's API
          rowData={rowData} // Row Data for Rows
          columnDefs={columnDefs} // Column Defs for Columns
          // defaultColDef={defaultColDef} // Default Column Properties
          animateRows={true} // Optional - set to 'true' to have rows animate when sorted
          rowSelection='multiple' // Options - allows click selection of rows
        //  onCellClicked={cellClickedListener} // Optional - registering for Grid Event
        />
      </div>
    </div>
  );
}

export default PatientsDebt;