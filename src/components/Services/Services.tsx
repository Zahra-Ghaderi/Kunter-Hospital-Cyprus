import React, { useState, useEffect, useRef } from "react";
import AddService from "../AddService/AddService";
import ComponentHeader from "../CustomComponents/ComponentHeader";
//import SearchBar from "../CustomComponents/SearchBar";
import "./Services.css";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import PublishedWithChangesOutlinedIcon from '@mui/icons-material/PublishedWithChangesOutlined';
import IconButton from '@mui/material/IconButton';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import axios from "axios";
//import SessionIcon from "../SessionIcon/SessionIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

const initialValue = { id: "", Servis_Name: "", Required_Session: "", Price: "" }

const Services = () => {

  const gridRef = useRef(); // Optional - for accessing Grid's API
  const [rowData, setRowData] = useState();
  const [tableData, setTableData] = useState(null)
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState(initialValue)
  const handleClickOpen = () => {
    setOpenModal(true);
    console.log("handleClickOpen")
  };
  //const [isPending, setIsPending] = useState(false);
  const pagination = true;

  const [columnDefs, setColumnDefs] = useState([
    { field: "Srl_KService", headerName: "Id", width: 100 },
   // { field: 'srl', headerName: 'srl',width: 100, filter: true, editable: true, cellEditor: 'agTextCellEditor' },
    { field: 'N_KService', headerName: 'İşlem Adı', width: 160, filter: true },
    { field: 'Required_Session', headerName: 'gerekli seanslar', filter: true },
    { field: 'Price', headerName: 'Fiyat (Turkish Lira)', filter: true },
    {
      headerName: "Edit", field: "Srl_KService", cellRendererFramework: (params: any) => 
      <div>
          <IconButton
          aria-label="edit" color="secondary" onClick={() => handleUpdate(params.value)}>
          <DeleteIcon /><DeleteIcon />
        </IconButton>

        <AddService data={formData} getServices={getServices} handleUpdate={handleUpdate}/>
      </div>
    },
    {
      headerName: "Delete", field: "Srl_KService", cellRendererFramework: (params: any) => 
      <div>
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
      .then(tableData => setTableData(tableData))
  }, []);

  const getServices = () => {
    fetch(url).then(resp => resp.json()).then(resp => setTableData(resp))
  }
  
  const handleClose = () => {
    setOpenModal(false);
    console.log("ddddddddddddddddddddd")
    //getServices();
    //setFormData(initialValue)
  };

  const handleOpen = () => {
    setOpenModal(true)
    //setOpen(false);
    //getServices();
    //setFormData(initialValue)
  };
       
     
  const onChange = (e: any) => {
    const { value, id } = e.target
    // console.log(value,id)
    setFormData({ ...formData, [id]: value })
  }

  const handleUpdate = (oldData: any) => {
    console.log("handleUpdate")    
    console.log("handleUpdate")    
    console.log("handleUpdate")    
    console.log("handleUpdate")    
    //AddService.handleOpen()
    setFormData(oldData)
    console.log(oldData)
    //setOpen(true);
    handleClickOpen()
    console.log("handleUpdate")    
  }

  const handleDelete = (id: any) => {
    const confirm = window.confirm("Are you sure, you want to delete this row")
    if (confirm) {
      console.log(url + `/del/${id}`);
      fetch(url + `/del/${id}`)
        .then(result => result.json())
        .then(tableData => setTableData(tableData))
        getServices();
      }
  }

  const handleFormSubmit = () => {
    console.log("handleClose");
    
    //setIsPending(true);
    if (formData.id) {
      //updating a user 
      const confirm = window.confirm("Are you sure, you want to update this row ?")
      confirm && fetch(url + `/edit/${formData.id}`, {
        method: "PUT", body: JSON.stringify(formData), headers: {
          'content-type': "application/json"
        }
      }).then(resp => resp.json())
        .then(resp => {
          //setIsPending(false);
          handleClose();
          getServices();
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
      <div className=" flex items-center  justify-between w-[69%] pr-5">
        <ComponentHeader header="Işlemler" />
        {/*<SearchBar toBeSearched="Işlem" />*/}
      </div>
      <Box sx={{ height: 450, width: '100%' }}>
        <div className="ag-theme-alpine w-[68%] h-[100%] mt-5">
          <AgGridReact
            pagination={pagination}
            //  ref={gridRef} // Ref for accessing Grid's API
            rowData={tableData} // Row Data for Rows
            columnDefs={columnDefs} // Column Defs for Columns
            // defaultColDef={defaultColDef} // Default Column Properties
            animateRows={true} // Optional - set to 'true' to have rows animate when sorted
            rowSelection='multiple' // Options - allows click selection of rows
          //  onCellClicked={cellClickedListener} // Optional - registering for Grid Event
          />
        </div>
      </Box>

      <button
        onClick={handleOpen}
        className="button-container fixed bottom-6 right-6 p-4 flex items-center justify-center gap-2 rounded-2xl uppercase text-xl shadow-lg w-[260px]"
      >
        <FontAwesomeIcon icon={faAdd} />
        Işlem Ekle 5544

      </button>
      <AddService open={openModal} closeModal={handleClose} data={null} getServices={getServices} handleUpdate={handleUpdate}/>
    </div >
  );
};
export default Services;
