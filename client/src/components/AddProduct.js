import React, { Component } from 'react';
import axios from 'axios';

export default class AddProduct extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeProduct = this.onChangeProduct.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            price: '',
            img: ''
        }
    }

    onChangeName(e) {
        this.setState({ name: e.target.value })
    }

    onChangePrice(e) {
        this.setState({ price: e.target.value })
    }

    onChangeProduct(e) {
        this.setState({ img: e.target.value })
    }
    
    onSubmit(e) {
        e.preventDefault()
        const formData = {
            name: this.state.name,
            price: this.state.price,
            img: this.state.img
        }; 

    axios.post('/items/', formData)
        .then((res) => {
            //console.log(res.data)
        }).catch((error) => {
           // console.log(error)
        });

        this.setState({ name: '', price: '', img: '' })
    }


render() {
    return (
        <>
        <h1 className="display-6 font-weight-bold mb-5 mt-4">Add Products</h1> 
        <div className="row justify-content-center align-items-center">  
                <form onSubmit={this.onSubmit}>
                    <div className="form-group ">
                        <input type="text" onChange={this.onChangeName} value={this.state.name} className="form-control" placeholder="Product Name.."/>
                    </div>
                    <div className="form-group">
                        <input type="text" onChange={this.onChangePrice} value={this.state.price} className="form-control" placeholder="Product Price.."/>
                    </div>
                    <div className="form-group">
                        <input type="text" onChange={this.onChangeProduct} value={this.state.img} className="form-control" placeholder="Product Image Url.."/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add" className="btn btn-success btn-block " />
                    </div>
                </form>
            </div>     
            <div className="row justify-content-center">
            <div class="alert alert-info" role="alert">
                    For Product Iamge URL, "Copy Image Address" from one of google images.
                </div>
            </div> 
         </>
    )
}
}
