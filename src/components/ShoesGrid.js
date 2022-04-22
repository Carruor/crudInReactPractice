import React from "react";
import "./ShoesGrid.css";
import ShoesGridRow from "./ShoesGridRow";

const ShoesGrid = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div className="tableContainer">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Nike</td>
            <td>130</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Moctezuma</td>
            <td>60</td>
          </tr>
          {data.map((el) => (
            <ShoesGridRow
              key={el.id}
              el={el}
              setDataToEdit={setDataToEdit}
              deleteData={deleteData}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShoesGrid;
