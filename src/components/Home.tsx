import React, { useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Docs from "./Docs/Docs";

import Patients from "./Patients/Patients";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import Reports from "./Reports/Reports";
import DailyReports from "./DailyReports/DailyReports";
//import Payments from "./Payments/Payments";
import Services from "./Services/Services";
import SideBar from "./SideBar/SideBar";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import ReactDOM, { render } from 'react-dom'
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import PatientsDebt from "./PatientsDebt/PatientsDebt";
const Home = () => {
  const [AUTHENTICATE, setAUTHENTICATE] = useState(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(true);
  console.log("username " + username);
  console.log("password " + password);

  const Login = (event: any) => {
    event.preventDefault();
    console.log("username " + username);
    console.log("password " + password);
    setTimeout(() => {
      setAUTHENTICATE(true);
    }, 200);
    if (username !== "admin" || password !== "admin") {
      setError(true);
    }
    if (!error) {
      setTimeout(() => {
        setAUTHENTICATE(true);
      }, 100);
    }
  };
  const logout = () => {
    setAUTHENTICATE(false);
  };


  return (
    <BrowserRouter>
      <div className="flex justify-start">
        <SideBar />
        {!AUTHENTICATE ? (
          <Switch >
            <div className=" w-[600px] h-[500px] flex flex-row  ml-[45%] my-[30px] items-center justify-center text-black ">
              <div className="flex  justify-center items-center gap-9 space-y-6 space-x-6 py-8 px-8 rounded-3xl bg-purple-300">
                <form
                  action="POST"
                  onSubmit={Login}
                  className=""
                >
                  <div>
                    <p className="font-medium text-2xl">
                      Welcome Back Dr. Eylem Sayilgan{" "}
                    </p>
                    <p className="font-medium text-xl ">Lütfen giriş yapın</p>
                  </div>
                  <div className="mt-3">
                    <input
                      type="text"
                      value={username}
                      name="username"
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Kullanıcı Adı"
                      className="w-full text-sm py-3 px-6 ring-1 ring-gray-300 rounded-md placeholder-black bg-purple-200 transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                    />
                    {error && username.length <= 0 ? (
                      <p className="ml-2 w-full text-sm  tracking-wide text-red-400  ">
                        Tam adınız gerekli!
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="mt-3">
                    <input
                      type="password"
                      value={password}
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Şifre"
                      className="w-full text-sm py-3 px-6 ring-1 ring-gray-300 rounded-md placeholder-black bg-purple-200 transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                    />
                    {error && password.length <= 0 ? (
                      <p className="ml-2 w-full text-sm  tracking-wide text-red-400  ">
                        Şifreniz Gerekli!
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flex  justify-center items-center">
                    <button
                      className="mt-6 bg-purple-600 rounded-3xl py-2 px-4"
                      onClick={Login}>Giriş</button>
                  </div>
                </form>
              </div>
            </div>
            <Redirect to="/" />
          </Switch>
        ) : (
          <div className="fixed left-[31%]">
            <button
              className="bg-purple-300 fixed bottom-6 left-[32%] p-3 flex items-center justify-center gap-2 rounded-2xl uppercase text-md shadow-lg w-[130px]"
              onClick={logout}
            >
              Çıkış
            </button>
            <Switch>
              <Route path="/" exact component={Patients} />
              <Route path="/services" exact component={Services} />
              <Route path="/docs" exact component={Docs} />
              <Route path="/reports" exact component={Reports} />
              <Route path="/DailyReports" exact component={DailyReports} />
              
              <Route path="/PatientsDebt" exact component={PatientsDebt} />
              <ProtectedRoute
                Path="/patients"
                auth={AUTHENTICATE}
                Component={Patients}
              />
            </Switch>
          </div>
        )}
      </div>
    </BrowserRouter>
    /*<div>                                   <Route path="/Payments" exact component={Payments} />
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
        className="bg-black"
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
          

            <div className=" flex justify-end">
              <button
                type="submit"
                value="Register"
                className="rounded-full signup-button w-20% right-6 px-6 py-3 mb-2 transition bg-purple-700  hover:bg-purple-800 active:bg-purple-900"
              >
                <span className=" font-regular text-white text-lg">
                  Dosyayı Ekle
                </span>
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>*/
//  ) , document.getElementById('app'))
);
};

export default Home;
