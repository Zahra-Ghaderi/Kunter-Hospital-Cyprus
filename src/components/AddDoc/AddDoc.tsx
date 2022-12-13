import React, { useState } from "react";
import "./AddDoc.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import "../AddService/AddButton.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
//import Button from "@mui/material/Button";
//import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import EvetCheckBox from "../CustomComponents/EvetCheckBox";

export default function AddDoc({ handleClose, data, onChange, handleFormSubmit }: any) {
  const { id, cod, Servis_Name, Required_Session, Price } = data
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 900,
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  //const handleClose = () => setOpen(false);  
  const Questions: string[] = [];
  const AddDoc = (event: any) => {
    event.preventDefault();
    handleClose();
  };
  return (
    <div>
      <button
        onClick={handleOpen}
        className="button-container fixed bottom-6 right-6 p-4 flex items-center justify-center gap-2 rounded-2xl uppercase text-xl shadow-lg w-[260px]"
      >
        <FontAwesomeIcon icon={faAdd} />
        Dosyayı Ekle
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="overflow-y-auto h-[90%] top-5">
          <form action="POST" onSubmit={AddDoc} className="space-y-6 py-8">
            <div className="border-b-2 pb-2">
              <p className="font-medium text-2xl text-purple-800">
                Dosyayı Ekle{" "}
              </p>
            </div>
            <div className="p-0">
              <h4 className="text-purple-800 ">Hastayı Seçin</h4>
            </div>

            <div className="border-t-2	pt-4">
              <div className="pb-2">
                <h4 className="text-purple-800">İşlemı Seçin</h4>
              </div>
              <div className=" p-2 flex gap-3 flex-wrap	 w-full ">
              </div>
            </div>

            <div className="flex gap-6 items-center">
              <div className="flex flex-col">
                {Questions.map((question) => {
                  return (
                    <p className="text-black text-sm ml-[3px] mt-[4px]">
                      {question}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-start space-x-20">
              <div className=" w-[27%] space-y-2">
                <span>Dosyalama tarihi:</span>
                <input
                  type="date"
                  placeholder="Dosyalama tarihi"
                  className="w-full text-sm py-3 px-6 ring-1 ring-gray-300 rounded-md placeholder-gray-800 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                />
              </div>
              <div className=" w-[27%] space-y-2">
                <span>Mutabık kalınan miktar:</span>
                <input
                  type="number"
                  name="HomePhoneNumber"
                  placeholder="Mutabık kalınan miktar"
                  className="w-full text-sm py-3 px-6 ring-1 ring-gray-300 rounded-md placeholder-gray-800 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                />
              </div>
            </div>

            <div className="flex space-x-20 justify-center">
              <Button
                onClick={handleClose}
                color="secondary"
                //type=""
                value="Cancel"
              //className="flex justify-start rounded-full signup-button w-50  px-6 py-3 mb-2 transition bg-purple-400  hover:bg-purple-500 active:bg-purple-600"
              >
                <span className="font-regular text-purple-900 text-lg">
                  İptal
                </span>
              </Button>
              <Button
                onClick={() => handleFormSubmit()}
                color="primary"
                //type="submit"
                value="Register"
                className="flex justify-end rounded-full signup-button w-50  px-6 py-3 mb-2 transition bg-purple-700  hover:bg-purple-800 active:bg-purple-900"
              >
                <span className="font-regular text-purple-900 text-lg">
                  {id ? "Update" : "Submit"}
                  {/*Işlem Ekle*/}
                </span>
              </Button>
              <Button onClick={handleClose}>
                close
              </Button>
            </div>

            {/*<div className=" flex justify-end">
                <button
                  type="submit"
                  value="Register"
                  className="rounded-full signup-button w-20% right-6 px-6 py-3 mb-2 transition bg-purple-700  hover:bg-purple-800 active:bg-purple-900"
                >
                  <span className=" font-regular text-white text-lg">
                    Dosyayı Ekle
                  </span>
                </button>
              </div>*/}
          </form>
        </Box>
      </Modal>
    </div>
  );

}





//export default AddDoc;
