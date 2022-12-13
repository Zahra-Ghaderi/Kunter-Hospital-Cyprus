import React, { useState, useEffect, useRef } from "react";
import AddPatient from "../AddPatient/AddPatient";
import ComponentHeader from "../CustomComponents/ComponentHeader";
import PatientsListHeader from "../CustomComponents/PatientsListHeader";
import PatientCard from "../PatientCard/PatientCard";
import Box from '@mui/material/Box';
import { MdBorderColor } from "react-icons/md";
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import PublishedWithChangesOutlinedIcon from '@mui/icons-material/PublishedWithChangesOutlined';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

{/*export interface PatientsProps {
  toBeSearched: string;
  //Patients: Patient[];
}*/}

const initialValue = { id:"", PName:"", PId: "", PMobile: "", PCity: ""}

const Patients = () => {

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
    { field: 'PName', headerName: 'HASTANIN ADI', filter: true, floatingFilter: true, editable: true},
    { field: 'PId', headerName: 'KIMLIK NO', width: 150, filter: true, floatingFilter: true},
    { field: 'PMobile', headerName: 'Telefon', filter: true, floatingFilter: true },
    { field: 'PCity', headerName: 'Şehir', width: 100, filter: true, floatingFilter: true },
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
  
  const url = `http://localhost:8090/api/Pationts`
  useEffect(() => {
    fetch(url)
      .then(result => result.json())
      .then(tableData => setRowData(tableData))
  }, []);

  const handleClose = () => {
    setOpen(false);
    getUsers();
    //setFormData(initialValue)
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
    console.log(oldData)
    setOpen(true);
    handleClickOpen()
  }

  const handleDelete = (id: any) => {
    const confirm = window.confirm("Are you sure, you want to delete this row")
  if (confirm) {
    console.log(url + `/del/${id}`, { method: "DELETE" });
    //*4
  //  fetch(url + `/del/${id}`, { method: "DELETE" })
  //  .then(resp => resp.json())
  //  .then(resp => getUsers())

    fetch(url + `/del/${id}`)
    .then(result => result.json())
    .then(tableData => setRowData(tableData))    
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
      // fetch(url + `/add/${555555}`, {
      // method: "POST", body: JSON.stringify(formData), headers: {
      // 'content-type': "application/json"
      //}   
      fetch(url + `/add/${123}/${555}`
      ).then(result => result.json())
        .then(tableData => setTableData(tableData))
        .then(result => {
          //console.log("handleFormSubmit in front 2")
          handleClose()
        })
    }
  }

  return (
    <div className="bg-gray-100  w-screen h-screen p-3 overflow-y-auto">
      <div className="flex items-end  justify-between w-[69%] pr-5">
        <ComponentHeader header="Hastalar" />
        {/*<SearchBar toBeSearched="Hasta" />*/}
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

export default Patients;
