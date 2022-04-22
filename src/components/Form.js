import "./Form.css";
import React, { useState, useEffect } from "react";

const initialForm = {
  id: null,
  brand: "",
  price: "",
};

const Form = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState({ initialForm });

  useEffect(()=> {
    if (dataToEdit) {
      setForm (dataToEdit);
    }else {
      setForm(initialForm);
    }
  },[dataToEdit]);
  
  const changeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }
    resetForm();
  };

  const resetForm = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div className="testCSS">
      <div className="formContainerStyle">
        <form onSubmit={submitForm}>
          <h3 className="h3Style">{dataToEdit? "Edit item:" :"Add item to catalogue:"}</h3>

          {/* <input
            onChange={changeForm}
            value={form.id}
            className="formFieldsStyle"
            type="text"
            name="id"
            placeholder="Id"
          ></input> */}
          <input
            onChange={changeForm}
            value={form.price}
            className="formFieldsStyle"
            type="text"
            name="price"
            placeholder="Price"
          ></input>
          <input
            onChange={changeForm}
            value={form.brand}
            className="formFieldsStyle"
            type="text"
            name="brand"
            placeholder="Brand"
          ></input>
          <input className="buttonStyle" type="submit" value="Send"></input>
          <input
            className="buttonStyle"
            type="reset"
            value="Reset"
            onClick={resetForm}
          ></input>
        </form>
      </div>
    </div>
  );
};

export default Form;
