import React, { Component } from 'react';
import Classnames from 'classnames';
import { Consumer } from '../context';
import image from '../static/876661122392077_2.jpg'



export class ShoppingCart extends Component {
    deleteItem = (id, price ,dispatch) => {
        dispatch({type: "Delete_Items_InBasket", payload: [id, price]});
    }

  render() {
    return (
        <Consumer>
        {
            value => {
                const { itemsInBasket, basketTotal, dispatch } = value;
                return (
                    <div className="ShoppingCart">
                        <h4 className="text-center">My Shopping Cart</h4>
                        <hr/>
                        <div className="items">
                        {
                            itemsInBasket.length > 0 ? (<React.Fragment> {
                                itemsInBasket.map( (item, index) => {
                                    return(
                                        <React.Fragment key={index}>
                                        <div className="row form-group" key={index}>
                                            <div className="col-sm-3">
                                                <img src={image} width="100%" height="70px"/>
                                            </div>
                                            <div className="col-sm-6 itemDesc">
                                                <div style={{fontSize: 16}}>{item.title}</div>
                                                <div>{item.style}</div>
                                            </div>
                                            <div className="col-sm-3 text-right">
                                            <div style={{cursor: "pointer"}} onClick={this.deleteItem.bind(this,item.id, item.price ,dispatch)}><i className="fas fa-times"></i></div>
                                                {item.currencyFormat} {item.price}</div>
                                            
                                        </div>
                                        <hr/>
                                        </React.Fragment>
                                    );
                                } )
                            }</React.Fragment> ) : (<div className="emptyCart">Add Items to your Bag <i className="fas fa-shopping-bag"></i></div>)

                        }
                        </div>
                        <div className="subtotalGroup">
                            <div className="subtotal form-group row">
                                <div className="col-sm-5">SUBTOTAL</div>
                                <div className="col-sm-7 text-right total-price">$ {basketTotal}</div>
                            </div>
                            <button className="btn btn-dark btn-block">CHECKOUT</button>
                        </div>
                    </div>
                );
            }
        }
    </Consumer>
    )
  }
}


export default class Basket extends Component {
    constructor () {
        super();
        this.state = {
            show: false
        }
    }
    toggleBasket () {
        this.setState({
            show: !this.state.show
        })
    }
  render() {
      const { show, items } = this.state
     
    return (
    <React.Fragment>
      <div className={ Classnames('basket', {'rightBasket' : show})}  onClick={this.toggleBasket.bind(this)}>
        {
            show ? <i className="far fa-times-circle"></i> : <i className="fas fa-cart-plus"></i>
        }
        
      </div>
      {
          show && <ShoppingCart />
      }
      
    </React.Fragment>
    )
  }
}