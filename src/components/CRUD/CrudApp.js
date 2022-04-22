import React from "react";
import { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const fakeApi = [
    {
        id:1,
        brand: "Nike",
        price: 30
    },
    {
        id:2,
        brand: "Adidas",
        price: 60
    },
    {
        id:3,
        brand: "Puma",
        price: 35
    },
    {
        id:5,
        brand: "Vans",
        price: 60
    }
];



const CrudApp = () => {
    
    const [fakeAPI,setAPI] =useState(fakeApi);
    
    return (
        <div>
            <h2>Crud App</h2>
            <CrudForm/>
           <CrudTable data={fakeAPI}/>
        </div>
    )
}

export default CrudApp