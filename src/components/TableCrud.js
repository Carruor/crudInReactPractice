import React from "react";
import { useState,useEffect } from "react";
import ShoesGrid from "./ShoesGrid";
import Form from "./Form";

const fakeApi = [
  {
    id: 12773,
    brand: "Nike",
    price: 30,
  },
  {
    id: 209778,
    brand: "Adidas",
    price: 60,
  },
  {
    id: 30720,
    brand: "Puma",
    price: 35,
  },
  {
    id: 5775,
    brand: "Vans",
    price: 60,
  },
];

const TableCrud = () => {
  const [fakeAPI, setAPI] = useState(fakeApi);

  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    console.log(data);
    setAPI([...fakeAPI,data])
  };

  const updateData = (data) => {
      let newData= fakeAPI.map(el => el.id === data.id ? data :el);
      setAPI(newData);
  };

  const deleteData = (id) => {};

  return (
    <div>
      <Form
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <ShoesGrid
        data={fakeAPI}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
      />
    </div>
  );
};

export default TableCrud;
