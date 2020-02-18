import React, {Component} from 'react';
import axios from 'axios';

export default class MeBhe extends Component {
    
    constructor(props) {
        super(props);

        this.state = {products:[]};
    }
    
    componentDidMount(){
        localStorage.setItem('username', "aditya");
        axios.get("http://localhost:4000/vendor/lists", {'username':localStorage.getItem('username')})
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
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
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