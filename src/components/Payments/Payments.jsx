import React, { useState, useEffect, useRef } from "react";
import "./Payments.css";
import ComponentHeader from "../CustomComponents/ComponentHeader";
import { NavLink } from "react-router-dom";
import { IoMdImages } from "react-icons/io";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

import SearchBar from "../CustomComponents/SearchBar";
import Photos from "../../assets/images/images-outline.svg";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
{
  /*
export interface PaymentsProps {
  toBeSearched: string;
  //Payments: Payments[];
}

const Payments = () => {
  return (
    <div>
      <div className="bg-gray-100 w-screen h-screen p-3 overflow-y-auto ">
        <ComponentHeader header="Ödeme Raporları" />
        <div className="mt-10 pr-4 ml-1">
           
        </div>
        
      </div>
    </div>

  );
};
*/
}
  /**
   * componentDidMount
   *
   * Fetch json array of objects from given url and update state.
   
  componentDidMount() {
    fetch("http://localhost:8090/api/srvs")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          isLoaded: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }*/

  const Payments = () => {

    const gridRef = useRef(); // Optional - for accessing Grid's API
    const [rowData, setRowData] = useState();
  
  
    const pagination = true;
  
    const [columnDefs, setColumnDefs] = useState([
      { field: 'Servis_Id', headerName: 'kod',width: 100, filter: true, floatingFilter: true, editable: true, cellEditor: 'agTextCellEditor' },
      { field: 'Servis_Name', headerName: 'İşlem Adı', filter: true, floatingFilter: true, cellEditorPopup: true },
      { field: 'Required_Session', headerName: 'gerekli seanslar', filter: true, floatingFilter: true },
      { field: 'Price', headerName: 'Fiyat (Turkish Lira)', filter: true, floatingFilter: true },
      { field: 'Delete' , headerName: 'Sil'}
    ]);
  
    useEffect(() => {
      fetch('http://localhost:8090/api/srvs')
        .then(result => result.json())
        .then(rowData => setRowData(rowData))
    }, []);
  
    return (
      <div className="bg-gray-100  w-screen h-screen p-3 overflow-y-auto">
        <div className=" flex items-center  justify-between w-[69%] pr-5">
          <ComponentHeader header="Işlemler" />
          <SearchBar toBeSearched="Işlem" />
        </div>
        <Box sx={{ height: 450, width: '100%'}}>
          <div className="ag-theme-alpine w-[68%] h-[100%] mt-5">
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
        </Box>
        
      </div >
    );
  };


export default Payments;
