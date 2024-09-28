import React from "react";

export default class TableClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "",
            Price: "",
            City: "",
            Stock: false,
            products: []
        };

        this.handleName = this.handleName.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.handleStock = this.handleStock.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleName(e) {
        this.setState({
            Name: e.target.value
        });
    }

    handlePrice(e) {
        this.setState({
            Price: e.target.value
        });
    }

    handleCity(e) {
        this.setState({
            City: e.target.value
        });
    }

    handleStock(e) {
        this.setState({
            Stock: e.target.checked
        });
    }

    handleRemove(index) {
        const filteredProducts = this.state.products.filter((_, i) => i !== index);
        this.setState({
            products: filteredProducts
        });
    }

    handleRegister() {
        const newProduct = {
            Name: this.state.Name,
            Price: this.state.Price,
            City: this.state.City,
            Stock: this.state.Stock
        };
        this.setState({
            products: [...this.state.products, newProduct],
            Name: "",
            Price: "",
            City: "",
            Stock: false
        });
    }

    render() {
        return (
            <div className="row">
                <h2 className="text-primary mt-5">Register Product</h2>
                <div className="col-3 p-4">
                    <dl>
                        <dt>Name</dt>
                        <dd><input type="text" className="form-control w-50" value={this.state.Name} onChange={this.handleName} /></dd>
                        <dt>Price</dt>
                        <dd><input type="number" className="form-control w-50" value={this.state.Price} onChange={this.handlePrice} /></dd>
                        <dt>Select City</dt>
                        <dd>
                            <select className="form-select w-50" value={this.state.City} onChange={this.handleCity}>
                                <option value="">Select City</option>
                                <option value="Kolkata">Kolkata</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Kochi">Kochi</option>
                            </select>
                        </dd>
                        <dt>Stock</dt>
                        <dd className="form-check form-switch">
                            <input type="checkbox" className="form-check-input" checked={this.state.Stock} onChange={this.handleStock} />
                        </dd>
                        <button className="btn btn-success" onClick={this.handleRegister}>Register</button>
                    </dl>
                </div>
                <div className="col-9">
                    <h2 className="text-danger">Product Details</h2>
                    <div>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>City</th>
                                    <th>Stock</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.products.map((prod, index) => (
                                    <tr key={index}>
                                        <td>{prod.Name}</td>
                                        <td>{prod.Price}</td>
                                        <td>{prod.City}</td>
                                        <td>{prod.Stock ? "Available" : "Out of Stock"}</td>
                                        <td><button className="btn btn-danger" onClick={() => this.handleRemove(index)}>Remove</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
