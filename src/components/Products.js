import React, { Component } from 'react';
import { Consumer } from '../../src/context';
import image1 from '../static/876661122392077_2.jpg';
import Product from '../layout/product';

class Products extends Component {
  render() {
    return (
      <Consumer>
        {
            value => {
                const { products } = value;
                return(
                    <div className="row" style={{margin: "0px"}}>
                       {
                            products.map((product, index) => {
                               return( 
                                    <Product
                                        key={product.id}
                                        index= {index}
                                        desc={product.style}
                                        src= {image1}
                                        title= {product.title}
                                        currency= {product.currencyFormat}
                                        price= {product.price}

                                    />
                               );
                            })
                        }
                       
                    </div>
                );
            }
        }
      </Consumer>
    )
  }
}

export default Products;
