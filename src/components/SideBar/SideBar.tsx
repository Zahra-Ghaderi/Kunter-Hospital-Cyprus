import React from "react";
import "./SideBar.css";
import "../FontAwesomeIcons/index";

import Logo from "../../assets/images/Logo.png";
import UserImg from "../../assets/images/user.jpg";
import { NavLink } from "react-router-dom";

import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

//<span className="flex justify-endh-3 w-3">
//<span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-fuchsia-600 opacity-75"></span>
//<span className="relative inline-flex rounded-full h-3 w-3 bg-purple-700"></span>
//</span>

const SideBar = () => {
  return (
    <div className="sideBar h-screen w-[30%] p-3 fixed top-0 left-0">
      <div className="flex logo rounded-3xl py-2">
        <NavLink to="/" className="w-[40%]">
          <img
            src={Logo}
            className="p-3 top-1 left-1 w-[90%] Logo ml-2 rounded-3xl bg-purple-400"
            alt="Kunter Guven Hastanesi Logo"
          />
        </NavLink>
        <NavLink to="/">
          <div className="grid justify-end ml-6">
            <img src={UserImg} className="rounded-full w-20 h-20" alt="User pic" />
            <div>
            <h2 className="text-black text-xl">Dr. Eylem Sayilgan</h2>
            <p className="flex text-s justify-end text-gray-600">Kunter Guven Hastanesi</p>
            </div>
          </div>
        </NavLink>
      </div>

      <div className="Links mt-7  overflow-y-auto h-[65%]">
        <ul className=" ">
          <NavLink
            to="/patients"
            activeStyle={{
              fontWeight: "500",
            }}
          >
            <li className="w-full link text-xl mb-5 py-3 pl-2 border-l-purple-700 border-l-4 rounded ">
              Hastalar
            </li>
          </NavLink>
          <NavLink
            to="/services"
            activeStyle={{
              fontWeight: "500",
            }}
          >
            <li className="w-full link text-xl mb-5 py-3 pl-2 border-l-purple-700 border-l-4 rounded ">
              Işlemler
            </li>
          </NavLink>
          <NavLink
            to="/docs"
            activeStyle={{
              fontWeight: "500",
            }}
          >
            <li className="w-full link text-xl mb-5 py-3 pl-2 border-l-purple-700 border-l-4 rounded">
              Dosyaylar
            </li>
          </NavLink>

          <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
          >
            <TreeItem nodeId="1" label="Raporlar" className=" w-full link text-xl mb-5 py-3 pl-2 border-l-purple-700 border-l-4 rounded">
              <NavLink to="/DailyReports">
                <TreeItem nodeId="2" label="Günlük Raporlar" className="w-30 bg-purple-250 p-3" />
              </NavLink>
              <NavLink to="/Payments">
                <TreeItem nodeId="2" label="Ödeme Raporları" className="p-3 text-xl" />
              </NavLink>
              <NavLink to="/PatientsDebt">
                <TreeItem nodeId="2" label="Borçlu Hastalar" className="p-3" />
              </NavLink>

            </TreeItem>
          </TreeView>
        </ul>
      </div>
    </div >
  );
};

export default SideBar;
