import React, { Component } from 'react';
import { Consumer } from '../context'

export default class Product extends Component {
  addtoCart = (id, dispatch )=> {
    dispatch({ type: "AddProduct", payload: id});
  };
  
  render() {
      const { index, desc, src, title, currency, price } = this.props
    return (
      <Consumer>
        {
            value => {
                const { dispatch } = value
                return (
                    <div className="card col-sm-3">
                        <div style={{textAlign: "center"}}>
                            <img className="" src={src} alt="men clothing"/>
                        </div>
                        <div className="card-body" style={{textAlign: "center"}}>
                            <h6 className="card-title">{title}</h6>
                            <p className="card-text">{desc}</p>
                            <p className="card-text">{currency} {price}</p>
                            <button type="button" className="btn btn-dark" onClick={this.addtoCart.bind(this, index, dispatch)}>Add to Cart</button>
                        </div>
                    </div>
                );
            }
        }
      </Consumer>
    )
  }
}
