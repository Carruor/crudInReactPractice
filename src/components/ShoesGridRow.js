import React from "react";

const ShoesGridRow = ({ el, setDataToEdit, deleteData }) => {
  let { id, brand, price } = el;

  return (
    <tr>
      <td>{el.id}</td>
      <td>{el.brand}</td>
      <td>{el.price}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Edit</button>
        <button onClick ={() => deleteData(id)}>Delete</button>
      </td>
    </tr>
  );
};

export default ShoesGridRow;
