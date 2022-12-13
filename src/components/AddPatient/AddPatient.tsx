import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import "../AddService/AddButton.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DialogTitle from '@material-ui/core/DialogTitle';
import EvetCheckBox from "../CustomComponents/EvetCheckBox";
import Patients from "../Patients/Patients";
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

const AddPatient = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [Item, setItem] = useState("");
  const Questions: string[] = [
    "Kronik bir hastalığınız var mı?",
    "Spor yapıyor musunuz?",
    "Ailenizde kilo problemi var mı?",
    "Kullandığınız ilaç var mı?",
    "Sindirim Sistemi bozukluğunuz var mı?",
    "Geçmişte kimyasal peeling yaptırdınız mı?",
    "Herhangi bir ürüne karşı alerjiniz var mı?",
    "Düzenli bakım yaptırıyor musunuz?",
    "Daha önce lazer tedavisi gördünüz mü?",
    "Geçmişte deri hastalığı geçirdiniz mi?",
  ];
  const AddPatient = (event: any) => {
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
        Hasta Ekle
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="overflow-y-auto h-[90%] top-5">
          <form action="POST" onSubmit={AddPatient} className="space-y-6 py-8 ">
            <div className="border-b-2 pb-2">
              <p className="font-medium text-2xl text-purple-800">
                Hasta Ekle{" "}
              </p>
            </div>
            <div className="p-0">
              <h4 className="text-purple-800 ">Kişisel bilgi</h4>
            </div>
            <div className="flex  pl-2 gap-2">
              <div>
                <input
                  type="text"
                  // value={fullName}
                  name="fullName"
                  // onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ad Soyad"
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
              <div>
                <input
                  type="number"
                  // value={email}
                  name="phoneNumber"
                  // onChange={(e) => setEmail(e.target.value)}
                  placeholder="Telefon numarası"
                  className="w-full text-sm py-3 px-6 ring-1 ring-gray-300 rounded-md placeholder-gray-800 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                />
                {/* {error && email.length <= 0 ? (
                <p className="ml-2 w-full text-sm  tracking-wide text-red-400  ">
                  Votre addresse email est requis!
                </p>
              ) : (
                ""
              )} */}
              </div>
              <div>
                <input
                  type="text"
                  // value={CIN}
                  name="Meslek"
                  // onChange={(e) => setCIN(e.target.value)}
                  minLength={7}
                  placeholder="Meslek"
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
            </div>
            <div className="flex pl-2 gap-2">
              <div>
                <input
                  type="number"
                  // value={fullName}
                  name="Id"
                  // onChange={(e) => setFullName(e.target.value)}
                  placeholder="Kimlik No"
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
              <div>
                <input
                  type="text"
                  // value={email}
                  name="finding"
                  // onChange={(e) => setEmail(e.target.value)}
                  placeholder="Bize Nereden Ulaştınız?"
                  className="w-full text-sm py-3 px-6 ring-1 ring-gray-300 rounded-md placeholder-gray-800 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                />
                {/* {error && email.length <= 0 ? (
                <p className="ml-2 w-full text-sm  tracking-wide text-red-400  ">
                  Votre addresse email est requis!
                </p>
              ) : (
                ""
              )} */}
              </div>
              <div>
                <input
                  type="text"
                  // value={CIN}
                  name="Address"
                  // onChange={(e) => setCIN(e.target.value)}
                  minLength={7}
                  placeholder="Adres"
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

            </div>
            <div className="flex pl-2 gap-2">
              <div className=" w-[27%]">
                <input
                  type="date"
                  placeholder="Doğum Tarihi"
                  className="w-full text-sm py-3 px-6 ring-1 ring-gray-300 rounded-md placeholder-gray-800 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                />
              </div>
              <div>
                <input
                  type="number"
                  name="HomePhoneNumber"
                  placeholder="Ev telefon numarası"
                  className="w-full text-sm py-3 px-6 ring-1 ring-gray-300 rounded-md placeholder-gray-800 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                />
              </div>
              <div className="w-[26%]">
                <select
                  id="city"
                  name="city"
                  placeholder="şehir"
                  className="w-full text-sm py-3 px-6 ring-1 ring-gray-300 rounded-md placeholder-gray-800 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                >
                  <option value="NeredeOturuyorsunuz">Nerede Oturuyorsunuz?</option>
                  <option value="Famagusta">Famagusta</option>
                  <option value="lefkosha">Lefkoşa</option>
                  <option value="Girne">Girne</option>
                  <option value="Karpaz">Karpaz</option>
                  <option value="Lefke">Lefke</option>
                  <option value="Guzelyurt">Güzelyurt</option>
                  <option value="Iskele ">Iskele </option>
                </select>
              </div>
            </div>
            <div className="flex pl-2 gap-2">
              <div>
                <input
                  type="text"
                  // value={fullName}
                  name="note"
                  // onChange={(e) => setFullName(e.target.value)}
                  placeholder="Açıklamalar"
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
              <div>
                <input
                  type="text"
                  // value={fullName}
                  name="Temsilci"
                  // onChange={(e) => setFullName(e.target.value)}
                  placeholder="Temsilci"
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
            </div>
            <div className="border-t-2	pt-4">
              <div className="pb-2">
                <h4 className="text-purple-800">Anamnez</h4>
              </div>
              <div className=" p-2 flex gap-3 flex-wrap	 w-full ">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row  items-center">
                    <input
                      id="Alerji"
                      value="Alerji"
                      onChange={(e) => setItem(e.target.value)}
                      type="checkbox"
                      // checked={isReceivingMails}
                      // onChange={(e) => setIsReceivingMails(!isReceivingMails)}
                      name="isReceivingMails"
                      placeholder="Le mot de passe (6+ caractères)"
                      className="w-3 h-3 focus:ring-0 ring-gray-300 rounded-md  bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                    />
                    <label
                      className="text-black text-sm ml-[3px]"
                      htmlFor="Alerji"
                    >
                      Alerji
                    </label>
                  </div>
                  <div className="flex flex-row  items-center">
                    <input
                      id="Diabet"
                      type="checkbox"
                      // checked={isReceivingMails}
                      // onChange={(e) => setIsReceivingMails(!isReceivingMails)}
                      name="isReceivingMails"
                      placeholder="Le mot de passe (6+ caractères)"
                      className="w-3 h-3 focus:ring-0 ring-gray-300 rounded-md  bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                    />
                    <label
                      className="text-black  text-sm ml-[3px]"
                      htmlFor="Diabet"
                    >
                      Diabet
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row  items-center">
                    <input
                      id="Sigara"
                      type="checkbox"
                      // checked={isReceivingMails}
                      // onChange={(e) => setIsReceivingMails(!isReceivingMails)}
                      name="isReceivingMails"
                      placeholder="Le mot de passe (6+ caractères)"
                      className="w-3 h-3 focus:ring-0 ring-gray-300 rounded-md  bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                    />
                    <label
                      className="text-black text-sm ml-[3px]"
                      htmlFor="Sigara"
                    >
                      Sigara
                    </label>
                  </div>
                  <div className="flex flex-row  items-center">
                    <input
                      id="Alkol"
                      type="checkbox"
                      // checked={isReceivingMails}
                      // onChange={(e) => setIsReceivingMails(!isReceivingMails)}
                      name="isReceivingMails"
                      placeholder="Le mot de passe (6+ caractères)"
                      className="w-3 h-3 focus:ring-0 ring-gray-300 rounded-md  bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                    />
                    <label
                      className="text-black text-sm ml-[3px]"
                      htmlFor="Alkol"
                    >
                      Alkol
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row  items-center">
                    <input
                      id="Pihtilasma"
                      type="checkbox"
                      // checked={isReceivingMails}
                      // onChange={(e) => setIsReceivingMails(!isReceivingMails)}
                      name="isReceivingMails"
                      placeholder="Le mot de passe (6+ caractères)"
                      className="w-3 h-3 focus:ring-0 ring-gray-300 rounded-md  bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                    />
                    <label
                      className="text-black text-sm ml-[3px]"
                      htmlFor="Pihtilasma"
                    >
                      Pıhtılaşma Sorunu
                    </label>
                  </div>
                  <div className="flex flex-row  items-center">
                    <input
                      id="Gebelik"
                      type="checkbox"
                      // checked={isReceivingMails}
                      // onChange={(e) => setIsReceivingMails(!isReceivingMails)}
                      name="isReceivingMails"
                      placeholder="Le mot de passe (6+ caractères)"
                      className="w-3 h-3 focus:ring-0 ring-gray-300 rounded-md  bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                    />
                    <label
                      className="text-black text-sm ml-[3px]"
                      htmlFor="Gebelik"
                    >
                      Gebelik
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row  items-center">
                    <input
                      id="Emzirme"
                      type="checkbox"
                      // checked={isReceivingMails}
                      // onChange={(e) => setIsReceivingMails(!isReceivingMails)}
                      name="isReceivingMails"
                      placeholder="Le mot de passe (6+ caractères)"
                      className="w-3 h-3 focus:ring-0 ring-gray-300 rounded-md  bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                    />
                    <label
                      className="text-black  text-sm ml-[3px]"
                      htmlFor="Emzirme"
                    >
                      Emzirme
                    </label>
                  </div>
                  <div className="flex flex-row  items-center">
                    <input
                      id="Tiroid"
                      type="checkbox"
                      // checked={isReceivingMails}
                      // onChange={(e) => setIsReceivingMails(!isReceivingMails)}
                      name="isReceivingMails"
                      placeholder="Le mot de passe (6+ caractères)"
                      className="w-3 h-3 focus:ring-0 ring-gray-300 rounded-md  bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                    />
                    <label
                      className="text-black text-sm ml-[3px]"
                      htmlFor="Tiroid"
                    >
                      Tiroid
                    </label>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex flex-row  items-center">
                    <input
                      id="Asit"
                      type="checkbox"
                      // checked={isReceivingMails}
                      // onChange={(e) => setIsReceivingMails(!isReceivingMails)}
                      name="isReceivingMails"
                      placeholder="Le mot de passe (6+ caractères)"
                      className="w-3 h-3 focus:ring-0 ring-gray-300 rounded-md  bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                    />
                    <label
                      className="text-black text-sm ml-[3px]"
                      htmlFor="Asit"
                    >
                      Ürik Asit
                    </label>
                  </div>
                  <div className="flex flex-row  items-center">
                    <input
                      id="Kanser"
                      type="checkbox"
                      // checked={isReceivingMails}
                      // onChange={(e) => setIsReceivingMails(!isReceivingMails)}
                      name="isReceivingMails"
                      placeholder="Le mot de passe (6+ caractères)"
                      className="w-3 h-3 focus:ring-0 ring-gray-300 rounded-md  bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                    />
                    <label
                      className="text-black text-sm ml-[3px]"
                      htmlFor="Kanser"
                    >
                      Kanser
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row  items-center">
                    <input
                      id="Implant"
                      type="checkbox"
                      // checked={isReceivingMails}
                      // onChange={(e) => setIsReceivingMails(!isReceivingMails)}
                      name="isReceivingMails"
                      placeholder="Le mot de passe (6+ caractères)"
                      className="w-3 h-3 focus:ring-0 ring-gray-300 rounded-md  bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                    />
                    <label
                      className="text-black  text-sm ml-[3px]"
                      htmlFor="Implant"
                    >
                      Implant
                    </label>
                  </div>
                  <div className="flex flex-row  items-center">
                    <input
                      id="Platin"
                      type="checkbox"
                      // checked={isReceivingMails}
                      // onChange={(e) => setIsReceivingMails(!isReceivingMails)}
                      name="isReceivingMails"
                      placeholder="Le mot de passe (6+ caractères)"
                      className="w-3 h-3 focus:ring-0 ring-gray-300 rounded-md  bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                    />
                    <label
                      className="text-black text-sm ml-[3px]"
                      htmlFor="Platin"
                    >
                      Platin
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row  items-center">
                    <input
                      id="KalpPili"
                      type="checkbox"
                      // checked={isReceivingMails}
                      // onChange={(e) => setIsReceivingMails(!isReceivingMails)}
                      name="isReceivingMails"
                      placeholder="Le mot de passe (6+ caractères)"
                      className="w-3 h-3 focus:ring-0 ring-gray-300 rounded-md  bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                    />
                    <label
                      className="text-black text-sm ml-[3px]"
                      htmlFor="KalpPili"
                    >
                      Kalp Pili
                    </label>
                  </div>
                  <div className="flex flex-row  items-center">
                    <input
                      id="Kolestrol"
                      type="checkbox"
                      // checked={isReceivingMails}
                      // onChange={(e) => setIsReceivingMails(!isReceivingMails)}
                      name="isReceivingMails"
                      placeholder="Le mot de passe (6+ caractères)"
                      className="w-3 h-3 focus:ring-0 ring-gray-300 rounded-md  bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                    />
                    <label
                      className="text-black text-sm ml-[3px]"
                      htmlFor="Kolestrol"
                    >
                      Kolestrol
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row  items-center">
                    <input
                      id="Trigliserit"
                      type="checkbox"
                      // checked={isReceivingMails}
                      // onChange={(e) => setIsReceivingMails(!isReceivingMails)}
                      name="isReceivingMails"
                      placeholder="Le mot de passe (6+ caractères)"
                      className="w-3 h-3 focus:ring-0 ring-gray-300 rounded-md  bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                    />
                    <label
                      className="text-black  text-sm ml-[3px]"
                      htmlFor="Trigliserit"
                    >
                      Trigliserit
                    </label>
                  </div>
                  <div className="flex flex-row  items-center">
                    <input
                      id="Tansiyon"
                      type="checkbox"
                      // checked={isReceivingMails}
                      // onChange={(e) => setIsReceivingMails(!isReceivingMails)}
                      name="isReceivingMails"
                      placeholder="Le mot de passe (6+ caractères)"
                      className="w-3 h-3 focus:ring-0 ring-gray-300 rounded-md  bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                    />
                    <label
                      className="text-black text-sm ml-[3px]"
                      htmlFor="Tansiyon"
                    >
                      Tansiyon
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row  items-center">
                    <input
                      id="Hormon"
                      type="checkbox"
                      // checked={isReceivingMails}
                      // onChange={(e) => setIsReceivingMails(!isReceivingMails)}
                      name="isReceivingMails"
                      placeholder="Le mot de passe (6+ caractères)"
                      className="w-3 h-3 focus:ring-0 ring-gray-300 rounded-md  bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                    />
                    <label
                      className="text-black text-sm ml-[3px]"
                      htmlFor="Hormon"
                    >
                      Hormon Tedavisi
                    </label>
                  </div>

                  <div className="flex flex-row  items-center">
                    <input
                      id="receive"
                      type="checkbox"
                      // checked={isReceivingMails}
                      // onChange={(e) => setIsReceivingMails(!isReceivingMails)}
                      name="isReceivingMails"
                      placeholder="Le mot de passe (6+ caractères)"
                      className="w-3 h-3 focus:ring-0 ring-gray-300 rounded-md  bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                    />
                    <label
                      className="text-black text-sm ml-[3px]"
                      htmlFor="receive"
                    >
                      .........
                    </label>
                  </div>
                </div>
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
              <div className="flex flex-row items-center">
                <div>
                  {Questions.map(() => {
                    return <EvetCheckBox content="Evet" />;
                  })}
                </div>
                <div>
                  {Questions.map(() => {
                    return <EvetCheckBox content="Hayir" />;
                  })}
                </div>
              </div>
            </div>

            <div className="flex space-x-80 justify-center">
              <div className=" flex justify-start">
                <button
                  //type="cancel"
                  //onClick="./Patients"
                  value="Cancel"
                  className="rounded-full signup-button w-50  px-6 py-3 mb-2 transition bg-purple-700  hover:bg-purple-800 active:bg-purple-900"
                >
                  <span className="font-regular text-white text-lg">
                    İptal
                  </span>
                </button>
              </div>
              <div className=" flex justify-end">
                <button
                  type="submit"
                  value="Register"
                  className="rounded-full signup-button w-50  px-6 py-3 mb-2 transition bg-purple-700  hover:bg-purple-800 active:bg-purple-900"
                >
                  <span className="font-regular text-white text-lg">
                    Hasta Ekle
                  </span>
                </button>
              </div>
            </div>


            {/*<div className=" flex justify-end">
              <button
                type="submit"
                value="Register"
                className="rounded-full signup-button w-20% right-6 px-6 py-3 mb-2 transition bg-purple-700  hover:bg-purple-800 active:bg-purple-900"
              >
                <span className=" font-regular text-white text-lg">
                  Hasta Ekle
                </span>
              </button>
                </div>*/}
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default AddPatient;
