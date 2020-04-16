import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {name,image,description,price} = this.props.item;
        return (
            <div className="col-3 col-sm-12 col-md-6">
                <div className="card">
                    <img className="card-img-top mainImages" src={image} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description.substr(0,20)} ... </p>
        <button className="btn btn-primary" onClick={() => this.props.addToCart(this.props.item)}>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}

Product.propTypes = {

};

export default Product;