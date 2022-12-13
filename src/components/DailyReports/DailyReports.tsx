import React from "react";
import "./DailyReports.css";
import ComponentHeader from "../CustomComponents/ComponentHeader";


import SearchBar from "../CustomComponents/SearchBar";
import Photos from "../../assets/images/images-outline.svg";




export interface DailyReportsProps {
  toBeSearched: string;
  //DailyReports: DailyReports[];
}

const DailyReports = () => {
  return (
    <div>
      <div className="bg-gray-100 w-screen h-screen p-3 overflow-y-auto ">
        <ComponentHeader header="Günlük Raporlar" />
        <div className="mt-5 pr-8 ml-3 w-screen h-screen">
          <div className="flex pl-2 gap-5">
            <div>İtibaren</div>
            <div className=" w-[20%]">
              <input
                type="date"
                placeholder="Doğum Tarihi"
                className="w-full text-sm py-3 px-6 ring-1 ring-gray-300 rounded-md placeholder-gray-800 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              />
            </div>
            <div>Bugüne kadar</div>
            <div className=" w-[20%]">
              <input
                type="date"
                placeholder="Doğum Tarihi"
                className="w-full text-sm py-3 px-6 ring-1 ring-gray-300 rounded-md placeholder-gray-800 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default DailyReports;
