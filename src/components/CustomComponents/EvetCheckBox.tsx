import React from "react";

interface props {
  content: string;
}
const EvetCheckBox: React.FC<props> = ({ content }: props) => {
  return (
    <div className="flex items-center mt-[.5px]">
      <div className=" ml-5">
        <label
          htmlFor="KronikEvet"
          className="text-black text-[14px] ml-[3px] mr-2"
        >
          {content}
        </label>
        <input
          type="checkbox"
          id=""
          // checked={isReceivingMails}
          // onChange={(e) => setIsReceivingMails(!isReceivingMails)}
          name="isReceivingMails"
          placeholder="Le mot de passe (6+ caractères)"
          className="w-3 h-3 focus:ring-0 ring-gray-300 rounded-md  bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
        />
      </div>
    </div>
  );
};

export default EvetCheckBox;
