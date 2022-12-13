import React, { useState, useEffect, useRef } from "react";
import AddDoc from "../AddDoc/AddDoc";
import PeymentIcon from "../PaymentIcon/PaymentIcon";
import SessionIcon from "../SessionIcon/SessionIcon";
import ComponentHeader from "../CustomComponents/ComponentHeader";
//import PatientsListHeader from "../CustomComponents/PatientsListHeader";
//import DocsListHeader from "../CustomComponents/DocsListHeader";
//import DocsCard from "../DocsCard/DocsCard";
import "./Docs.css";
import SearchBar from "../CustomComponents/SearchBar";
import Photos from "../../assets/images/images-outline.svg";//C:\Users\Zahra\Desktop\Front end\Front-end\src\assets\images\images-outline.svg
import { NavLink } from "react-router-dom";
import { IoMdImages } from "react-icons/io";
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import PublishedWithChangesOutlinedIcon from '@mui/icons-material/PublishedWithChangesOutlined';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const initialValue = {id: "", name: "", ServiceName: "",  price: "", DebitBalance: "" , photo: "" , session: "" , payments: ""}
export interface DocsProps {
  toBeSearched: string;
  //Docs: Docs[];
}

const Docs = () => {
  const gridRef = useRef(); // Optional - for accessing Grid's API
  const [rowData, setRowData] = useState();
  const [tableData, setTableData] = useState(null)
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState(initialValue)
  const handleClickOpen = () => {
    setOpen(true);
  };
  const pagination = true;

  const [columnDefs, setColumnDefs] = useState([
    {field: 'id', headerName: 'KIMLIK NO', width: 100},
    {field: 'name',  headerName: 'HASTANIN ADI', width: 100},
    {field: 'ServiceName', headerName: 'HASTALIK', width: 100},
    { field: 'price', headerName: 'FIYAT', width: 100, type: 'number'},
    {field: 'DebitBalance', headerName: 'Borç bakiyesi', width: 100, type: 'number'},
    {field: 'photo', headerName: 'Fotoğraflar', width: 100},
    {field: 'session', headerName: 'Oturumlar', width: 100},
    {field: 'payments', headerName: 'Ödemeler', width: 100},
    {
      headerName: "Actions", field: "Servis_Id", cellRendererFramework: (params: any) => <div>
        <IconButton
          color="secondary" onClick={() => handleUpdate(params.data)}>
            <PublishedWithChangesOutlinedIcon />
        </IconButton>
        <IconButton
          aria-label="delete" color="secondary" onClick={() => handleDelete(params.value)}>
          <DeleteIcon />
        </IconButton>
      </div>
    }
  ]);
  
  const url = `http://localhost:8090/api/Kservices`
  useEffect(() => {
    fetch(url)
      .then(result => result.json())
      .then(rowData => setRowData(rowData))
  }, []);

  const handleClose = () => {
    setOpen(false);
    setFormData(initialValue)
  };
  const getUsers = () => {
    fetch(url).then(resp => resp.json()).then(resp => setTableData(resp))
  }
  const onChange = (e: any) => {
    const { value, id } = e.target
    // console.log(value,id)
    setFormData({ ...formData, [id]: value })
  }
  const handleUpdate = (oldData: any) => {
    setFormData(oldData)
    handleClickOpen()
  }

  const handleDelete = (id: any) => {
    const confirm = window.confirm("Are you sure, you want to delete this row")
  if (confirm) {
    console.log(url + `/del/${id}`);
    console.log(url + `/del/${id}`);
    console.log(url + `/del/${id}`);
    console.log(url + `/del/${id}`);
  //  fetch(url + `/del/${id}`, { method: "DELETE" })
  //  .then(resp => resp.json())
  //  .then(resp => getUsers())

    fetch(url + `/del/${id}`)
    .then(result => result.json())
    .then(rowData => setRowData(rowData))    
  }
  }

  const handleFormSubmit = () => {
    if (formData.id) {
      //updating a user 
      const confirm = window.confirm("Are you sure, you want to update this row ?")
      confirm && fetch(url + `/edit/${formData.id}`, {
        method: "PUT", body: JSON.stringify(formData), headers: {
          'content-type': "application/json"
        }
      }).then(resp => resp.json())
        .then(resp => {
          handleClose()
          getUsers()
        })
    } else {
      // adding new user
      fetch(url + `/add/${555555}`, {
        method: "POST", body: JSON.stringify(formData), headers: {
          'content-type': "application/json"
        }
      }).then(resp => resp.json())
        .then(resp => {
          handleClose()
          getUsers()
        })
    }
  }


  return (
    <div className="bg-gray-100  w-screen h-screen p-3 overflow-y-auto">
      <div className="flex items-end  justify-between w-[69%] pr-5">
        <ComponentHeader header="Dosyaylar" />
        <SearchBar toBeSearched="Dosyayı" />
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
      <AddDoc  data={formData} onChange={onChange} handleFormSubmit={handleFormSubmit}
      handleClose={handleClose} />
    </div>

  );
};

export default Docs;
