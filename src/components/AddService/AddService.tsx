import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import "./AddButton.css";
import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import PublishedWithChangesOutlinedIcon from '@mui/icons-material/PublishedWithChangesOutlined';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";//const AddService = () => 
import DialogTitle from '@material-ui/core/DialogTitle';
import { Component } from "ag-grid-community";

export default function AddService({open, closeModal, data, getServices, handleUpdate }: any) {

  if (!open) return null;
 
  console.log(data) 
  if (data)
    var { id, cod, Servis_Name, Required_Session, Price } = data
  
  {/*var id =''
  var cod = ''
  var Servis_Name = ''
  var Required_Session= ''
  var Price =''*/}

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };

  const url = `http://localhost:8090/api/Kservices`

  //const [open, setOpen] = React.useState(false);
  //const handleOpen = () => setOpen(true);
  const handleClose = () => 
  {
    closeModal(false);
    console.log(open)
  }
  //const [tableData, setTableData] = useState(null)

  const handleChange = (event: any) => {
    console.log(event.target.value)
    console.log(data.Price)

    event.target.value = data.Price
  }

  const handleFormSubmit4 = () => {
    console.log("handleFormSubmit4");
    console.log(data);
    console.log(data);

    if (data) {
      data = {id, cod, Servis_Name, Required_Session, Price }
      //updating a user 
           const confirm = window.confirm("Are you sure, you want to update this row ?")
           confirm && fetch(url + `/edit/${data.id}`, {
             method: "PUT", body: JSON.stringify(data), headers: {
               'content-type': "application/json"
             }
           }).then(resp => resp.json())
             .then(resp => {
               //setIsPending(false);
               handleClose();
               getServices();
             })
    }
    else {

    fetch('http://localhost:8090/api/Kservices', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        handleClose();
        getServices();
        // Handle data
      })
      .catch((err) => {
        console.log(err.message);
      });
    }

  }

  const onChangecod = (e: any) => { cod = e.target.value }
  const onChangePrice = (e: any) => { Price = e.target.value }
  const onChangeServisName = (e: any) => { Servis_Name = e.target.value }
  const onChangeRequiredSession = (e: any) => { Required_Session = e.target.value }

  return (
    <div>
      <IconButton
         // onClick={handleOpen}
          color="secondary" >
          <PublishedWithChangesOutlinedIcon />
      </IconButton>
 
      <button
        //onClick={handleOpen}
        //className="button-container fixed bottom-6 right-6 p-4 flex items-center justify-center gap-2 rounded-2xl uppercase text-xl shadow-lg w-[260px]"
      >
        <FontAwesomeIcon icon={faAdd} />
        Edite
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <form action="POST" className="space-y-6 py-2">
            <div>
              <DialogTitle className="text-purple-900" id="alert-dialog-title">
                {id ? "Kullanıcıyı güncelle" : "Işlem Ekle"}
              </DialogTitle>
              {/*<p className=" font-medium text-2xl text-purple-800">
                Işlem Ekle{" "}//    "Update user":"Create new user"
              </p>*/}
            </div>
            <div>{/*serviceCode*/}
              <input
                type="text"//number
                //value={cod}
                //id="categoryName"
                name="serviceCode"
                onChange={e => onChangecod(e)}
                placeholder="Işlem Codu"
                className="w-full text-sm py-3 px-6 ring-1 ring-gray-300 rounded-md placeholder-gray-800 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              />
              {/* {error && fullName.length <= 0 ? (
                <p className="ml-2 w-full text-sm  tracking-wide text-red-400  ">
                  Votre nom complet est requis!
                </p>
              ) : (
                ""
              )} */}
            </div>
            <div>{/*Servis_Name*/}
              <input
                type="text"
                //value={Servis_Name}
                name="Servis_Name"
                onChange={e => onChangeServisName(e)}
                placeholder="Işlem Adı"
                className="w-full text-sm py-3 px-6 ring-1 ring-gray-300 rounded-md placeholder-gray-800 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              />
              {/* {error && fullName.length <= 0 ? (
                <p className="ml-2 w-full text-sm  tracking-wide text-red-400  ">
                  Votre nom complet est requis!
                </p>
              ) : (
                ""
              )} */}
            </div>
            <div>{/*session*/}
              <input
                type="number"
                //value={Required_Session}
                name="session"
                onChange={e => onChangeRequiredSession(e)}
                //minLength={7}
                placeholder="gerekli seanslar"//Profession
                className="w-full text-sm py-3 px-6 ring-1 ring-gray-300 rounded-md placeholder-gray-800 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              />
              {/* {error && CIN.length <= 0 ? (
                  <p className="ml-2 w-full text-sm  tracking-wide text-red-400  ">
                    Votre CIN est requis!
                  </p>
                ) : (
                  ""
                )} */}
            </div>
            <div>{/*{Price}*/}
              <input
                type="number"
                //value={Price}
                name="price"
                onChange={e => onChangePrice(e)}
                //minLength={7}
                step="0.001"
                placeholder="Fiyat"
                className="w-full text-sm py-3 px-6 ring-1 ring-gray-300 rounded-md placeholder-gray-800 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              />
              {/* {error && CIN.length <= 0 ? (
                  <p className="ml-2 w-full text-sm  tracking-wide text-red-400  ">
                    Votre CIN est requis!
                  </p>
                ) : (
                  ""
                )} */}
            </div>

            <div className="flex space-x-20 justify-center">
              <Button
                variant="outlined"
                onClick={handleClose}
                color="secondary"
                //type=""
                value="Cancel"
                className="flex justify-start rounded-full signup-button w-50  px-6 py-3 mb-2 transition bg-purple-400  hover:bg-purple-500 active:bg-purple-600"
              >
                <span className="font-regular text-purple-900 text-lg">
                  İptal
                </span>
              </Button>
              <Button
                variant="contained"
                onClick={() => handleFormSubmit4()}
                //onClick={() => save()}
                color="secondary"
                //type="submit"
                value="Register"
                className="flex justify-end rounded-full signup-button w-50  px-6 py-3 mb-2 transition bg-purple-700  hover:bg-purple-800 active:bg-purple-900"
                >
                <span className="font-regular text-purple-100 text-lg">
                  {id ? "Güncelle" : "Işlem Ekle11"}
                  {/*Işlem Ekle   "Update":"Submit"*/}
                </span>
              </Button>
            </div>
          </form>
            
        </Box>
      </Modal>
    </div >
  );
};

//export default AddService;
