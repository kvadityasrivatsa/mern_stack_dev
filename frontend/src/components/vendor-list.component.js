import React, {Component} from 'react';
import axios from 'axios';

export default class VendorList extends Component {
    
    constructor(props) {
        super(props);

        this.state = {products:[]};
    }
    
    componentDidMount(){
        axios.post("http://localhost:4000/vendor/lists", {vname:localStorage.getItem('username')})
             .then(res => {
                console.log(res.data);
                this.setState({products:res.data});
            });   
    }

    render() {
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Vname</th>
                        </tr>
                    </thead>
                    <tbody>
                    { 
                        this.state.products.map((currentProduct, i) => {
                            return (
                                <tr>
                                    <td>{currentProduct.name}</td>
                                    <td>{currentProduct.price}</td>
                                    <td>{currentProduct.quantity}</td>
                                    <td>{currentProduct.vname}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}