import React, { useState } from 'react';
import axios from 'axios';

export default function AddProduct () {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [img, setImg] = useState("");
    
    const [nameErr, setNameErr] = useState({});
    const [priceErr, setPriceErr] = useState({});
    const [imgErr, setImgErr] = useState({});


    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = formValidation();

        if(isValid){

            const formData = {
                name: name,
                price: price,
                img: img
            };

        axios.post('/items/', formData)
        .then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        });

        setName("");
        setPrice("");
        setImg("");
        
        }
       
    }

    const formValidation = () => {
        const nameErr = {};
        const priceErr = {};
        const imgErr = {};
        let isValid = true;

        if (!name){
            isValid = false;
            nameErr.nameNotString = "Product Name Can't be Empty..";
        }
        
        
        if (!price ){
            isValid = false;
            priceErr.priceNotNumber = "Product Price Can't be Empty..";
        }
        

        if (!img.includes("http")){
            isValid = false;
            imgErr.notUrl = "Please Enter Valid Url..";
        }
        
        setNameErr(nameErr);
        setPriceErr(priceErr);
        setImgErr(imgErr);
        
        return isValid;
    }

    return (
        <>
        <h1 className="display-6 font-weight-bold mb-5 mt-4">Add Products</h1> 
        <div className="row justify-content-center align-items-center">  
                <form onSubmit={onSubmit}>
                    <div className="form-group ">
                        <input 
                        type="text" 
                        onChange={(e) => {setName(e.target.value)}} 
                        value={name} 
                        name="name"
                        className="form-control" 
                        placeholder="Product Name.."
                        
                        />
                        {Object.keys(nameErr).map((key)=> {
                            return <p style={{color:"red"}} key={key}>{nameErr[key]}</p>
                        })}
                    </div>
                    <div className="form-group">
                        <input 
                        type="text" 
                        onChange={(e) => {setPrice(e.target.value)}} 
                        value={price} 
                        name="price"
                        className="form-control" 
                        placeholder="Product Price.."
                        
                        />
                        {Object.keys(priceErr).map((key)=> {
                            return <p style={{color:"red"}} key={key}>{priceErr[key]}</p>
                        })}
                    </div>
                    <div className="form-group">
                        <input 
                        type="text" 
                        onChange={(e) => {setImg(e.target.value)}} 
                        value={img} 
                        name="img"
                        className="form-control" 
                        placeholder="Product Image Url.."
                        
                        />
                        {Object.keys(imgErr).map((key)=> {
                            return <p style={{color:"red"}} key={key}>{imgErr[key]}</p>
                        })}
                    </div>
                    <div className="form-group">
                        <button 
                        type="submit" 
                        className="btn btn-success btn-block ">
                            Add
                        </button>
                    </div>
                </form>
            </div>     
            <div className="row justify-content-center">
            <div className="alert alert-info" role="alert">
                    For Product Iamge URL, "Copy Image Address" from one of google images.
                </div>
            </div> 
         </>
    )
}
