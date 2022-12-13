import React from "react";
import "./DocsCard.css";
interface props {
  name: string;
  Id: string;
  DiagnosisType: string;
  LastTesting: string;
  PhoneNumber: string;
}

const DocsCard: React.FC<props> = ({
  name,
  Id,
  DiagnosisType,
  LastTesting,
  PhoneNumber
}: props) => {
  return (
    <div className="flex flex-row py-5 px-2 bg-purple-100 my-4  rounded-md shadow-md w-[65%]">
      <div>
        <p>{name}</p>
      </div>
      <div className="ml-[13rem] text-gray-500">
        <p>{Id}</p>
      </div>
      <div className="ml-[10.5rem] text-gray-500">
        <p>{DiagnosisType}</p>
      </div>
      <div className="ml-[6.5rem] text-gray-500">
        <p>{LastTesting}</p>
      </div>
      <div className="ml-[6.5rem] text-gray-500">
        <p>{PhoneNumber}</p>
      </div>
    </div>
  );
};

export default DocsCard;
