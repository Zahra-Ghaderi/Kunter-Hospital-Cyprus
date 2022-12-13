import React from "react";

const PatientsListHeader = () => {
  return (
    <div className="flex flex-row gap-36 text-purple-500">
      <div><p>HASTANIN ADI</p></div>
      <div><p>KIMLIK NO</p></div>
      <div><p>TELEFON NUMARASI</p></div>
      <div><p>SON ZIYARET</p></div>
      
    </div>
    
  );
};

export default PatientsListHeader;
