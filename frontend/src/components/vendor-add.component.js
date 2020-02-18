import React, {Component} from 'react';
import axios from 'axios';

export default class VendorAddProduct extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            price: '',
            quantity: '',
            cur_quant: '',
            status: '',
            vname: ''
        }

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChangeName(event) {
        this.setState({ name: event.target.value });
    }

    onChangePrice(event) {
        this.setState({ price: event.target.value });
    }

    onChangeQuantity(event) {
        this.setState({ quantity: event.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const newProduct = {
            name: this.state.name,
            price: this.state.price,
            quantity: this.state.quantity,
            vname: localStorage.getItem("username")
        }

        axios.post("http://localhost:4000/vendor-add-product", newProduct)
             .then(res => console.log(res.data));

        console.log(newProduct.name)

        this.setState({
            name: '',
            price: '',
            quantity: '',
            cur_quant: '',
            status: '',
            vname: localStorage.getItem("username")
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.name}
                               onChange={this.onChangeName}
                               />
                    </div>
                    <div className="form-group">
                        <label>Price: </label>
                        <input type="number" 
                               className="form-control" 
                               value={this.state.email}
                               onChange={this.onChangePrice}
                               />  
                    </div>
                    <div className="form-group">
                        <label>Quantity: </label>
                        <input type="number" 
                               className="form-control" 
                               value={this.state.persona}
                               onChange={this.onChangeQuantity}
                               />  
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Product" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}