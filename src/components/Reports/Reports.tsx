import React from "react";
import ComponentHeader from "../CustomComponents/ComponentHeader";
import "./Reports.css";//Docs.css


const Reports = () => {
  return (
    <div>
      <div className="bg-gray-100 w-screen h-screen p-3 overflow-y-auto ">
        <ComponentHeader header="Raporlar" />
        <div className="mt-5 pr-8 ml-3">
          <h2 className="font-regular">
            Aliqua sit pariatur laboris excepteur laborum?
          </h2>
          <p className="text-xs w-[69%] mt-2">
            Culpa Lorem quis Lorem esse qui dolore aliquip veniam quis cillum ea
            eiusmod.Dolor nulla aliqua consequat veniam adipisicing labore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reports;

