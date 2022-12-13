import React from "react";
interface props {
  header: string;
}
const ComponentHeader: React.FC<props> = ({ header }: props) => {
  return <div className="text-4xl">{header}</div>;
};

export default ComponentHeader;
