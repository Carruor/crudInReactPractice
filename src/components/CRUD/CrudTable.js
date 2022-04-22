import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({data}) => {
    return (
        <div>
                <h3>Shoes Data</h3>
            <table>
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>  
                <tbody>
                    {data.map (el => <CrudTableRow key={el.id} el={el}/>)}
                </tbody> 
            </table>
        </div>
    )
}

export default CrudTable;