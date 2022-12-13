import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
//import "./AddButton.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { GiMoneyStack } from "react-icons/gi";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const PaymentIcon = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState(null);
  const [values, setValues] = React.useState({
    amount: '',
  });

  //const handleChange = (prop) => (event) => {
  //  setValues({ ...values, [prop]: event.target.value });
  //};

  return (
    <div>
      <button
        onClick={handleOpen}
        className="button-container hover:bg-violet-300 flex items-center justify-center  rounded-full uppercase text-3xl shadow-lg w-[50px]"
      >
        <GiMoneyStack />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="place-content-center">
            <p className="font-medium text-2xl text-purple-800">
              Ödemeler{" "}
            </p>
            <table className="styled-table w-screen">
              <thead>
                <tr>
                  <th>Tarih</th>
                  <th>Ödeme</th>
                  <th>Silmek</th>
                  <th>Düzenle</th>
                </tr>
              </thead>
              <tbody>
                <tr className="active-row">
                  <td>12/05/2021</td>
                  <td>1500</td>
                  <td className="text-2xl"><MdDeleteForever /></td>
                  <td className="text-xl"><FaEdit /></td>
                </tr>
                <tr className="active-row">
                  <td>04/23/2019</td>
                  <td>2000</td>
                  <td className="text-2xl"><MdDeleteForever /></td>
                  <td className="text-xl"><FaEdit /></td>
                </tr>
              </tbody>
            </table>
            <div className="shadow-xl">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <div className=" flex justify-end">
                      <button
                        type="button"
                        value="Register"
                        className="rounded-full signup-button w-40  px-3 py-1 mb-0 transition bg-purple-500  hover:bg-purple-600 active:bg-purple-700"
                      >
                        <span className="font-regular text-white text-lg">
                          Ödeme Ekle
                        </span>
                      </button>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="flex justify-start space-x-5">
                      <div className=" w-[50%] space-y-2">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <Stack spacing={3}>
                            <DatePicker
                              disableFuture
                              label="Ödeme tarihi"
                              openTo="year"
                              views={['year', 'month', 'day']}
                              value={value}
                              onChange={(newValue) => {
                                setValue(newValue);
                              }}
                              renderInput={(params) => <TextField {...params} />}
                            />
                          </Stack>
                        </LocalizationProvider>

                      </div>
                      <div className=" w-[50%] space-y-2">
                        <FormControl>
                          <InputLabel>Amount</InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-amount"
                            value={values.amount}
                            //onChange={handleChange('amount')}
                            startAdornment={<InputAdornment position="start">tl</InputAdornment>}
                            label="Amount"
                          />
                        </FormControl>
                      </div>
                    </div>
                  </Typography>
                  <div className=" flex justify-end mt-2">
                    <button
                      type="button"
                      value="Register"
                      className="rounded-full signup-button w-20  px-3 py-1 mb-0 transition bg-purple-500  hover:bg-purple-600 active:bg-purple-700"
                    >
                      <span className="font-regular text-white text-lg">
                        Kaydet
                      </span>
                    </button>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </Box>
      </Modal>
    </div >
  );
};

export default PaymentIcon;
