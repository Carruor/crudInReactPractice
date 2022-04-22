import React from "react";

const CrudTableRow = ({el}) => {
    return (
                <tr>
                        <td>{el.brand}</td>
                        <td>{el.price}</td>
                        <td>
                            <button>Reset</button>
                            <button>Delete</button>
                        </td>
        
                </tr>
    )
}

export default CrudTableRow;