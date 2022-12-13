import React from "react";
import AddPatient from "../AddPatient/AddPatient";
import ComponentHeader from "../CustomComponents/ComponentHeader";
import PatientsListHeader from "../CustomComponents/PatientsListHeader";
//import DocsListHeader from "../CustomComponents/DocsListHeader";

import SearchBar from "../CustomComponents/SearchBar";
import PatientCard from "../PatientCard/PatientCard";
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { MdBorderColor } from "react-icons/md";

const columns = [
  {
    field: 'name',
    headerName: 'HASTANIN ADI',
    width: 170
  },
  {
    field: 'id',
    headerName: 'KIMLIK NO',
    width: 130,
    editable: true,
  },
  {
    field: 'PhoneNumber',
    headerName: 'Telefon',
    width: 150,
    editable: true,
  },
  {
    field: 'city',
    headerName: 'Şehir',
    width: 100,
    editable: true,
  },
];

const rows = [
  {
    name: 'Ahmet',
    id: '3154728694',
    PhoneNumber: '539 425 3156',
    city: 'famagusta'
  },
  {
    name: 'Asiye',
    id: '2485173642',
    PhoneNumber: '533 844 1955',
    city: 'girne'
  },
  {
    name: 'fatma',
    id: '1342571588',
    PhoneNumber: '533 243 112',
    city: 'lefgosa'
  },
];
export interface PatientsProps {
  toBeSearched: string;
  //Patients: Patient[];
}
{/*export interface Patient {
  name: string;
  Id: string;
  DiagnosisType: string;
  LastTesting: string;
  PhoneNumber: string;
}
export const DUMMY_DATA = [
  {
    name: "fatma",
    Id: "6411257",
    PhoneNumber: "90 533 123 7845",
    LastTesting: "15/03/2022",
    DiagnosisType: "Botoks"
  },
  {
    name: "Zack",
    Id: "9733311",
    PhoneNumber: "90 539 567 1825",
    LastTesting: "18/09/2022",
    DiagnosisType: "Dolgu"

  },
  {
    name: "asma",
    Id: "9487512",
    PhoneNumber: "90 577 124 7155",
    LastTesting: "10/05/2022",
    DiagnosisType: "Mezoterapi"

  },
  {
    name: "Hasan",
    Id: "3451287",
    PhoneNumber: "90 542 132 9664",
    LastTesting: "10/02/2022",
    DiagnosisType: "İp Askı"

  },
  {
    name: "Hossein",
    Id: "3451287",
    PhoneNumber: "90 542 132 9664",
    LastTesting: "10/02/2022",
    DiagnosisType: "İp Askı"

  }
];*/}

const Patients = () => {

  return (
    <div className="bg-gray-100  w-screen h-screen p-3 overflow-y-auto">
      <div className="flex items-end  justify-between w-[69%] pr-5">
        <ComponentHeader header="Hastalar" />
        <SearchBar toBeSearched="Hasta" />
      </div>
      <div>
        <div className="place-content-center">
          <Box sx={{ height: 450, width: '100%', MdBorderColor: 'purple' }}>
            <DataGrid
              className="styled-table bg-purple-200 border-purple-900"
              rows={rows}
              columns={columns}
              pageSize={6}
              rowsPerPageOptions={[5]}
              //checkboxSelection
              disableSelectionOnClick
              experimentalFeatures={{ newEditingApi: true }}
            />
          </Box>
        </div>
      </div>
      < AddPatient />
    </div >
  );
};

export default Patients;
