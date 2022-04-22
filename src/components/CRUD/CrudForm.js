import React, {useState,useEffect} from "react";

const initialForm = {
    id:null,
    brand: "",
    price: "",
}

const CrudForm = () => {

const [form, setForm] = useState({initialForm});

const changeForm = (e) => {};

const submitForm = (e) => {};

const resetForm = (e) => {};

    return ( <div>
        <h3>Add</h3>
        <form onSubmit={submitForm}>
            <input type= "text" name= "brand" placeholder="brand" onChange={changeForm} value={form.brand}></input>
            <input type= "text" name= "price" placeholder="price" onChange={changeForm} value={form.price}></input>
            <input type= "submit" value= "Send" />
            <input type= "reset" value= "Reset" onClick={resetForm}/>
        </form>
    </div>

    )
};

export default CrudForm;