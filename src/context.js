import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'AddProduct' : 
           const newprod = state.products[action.payload];
           const price = state.basketTotal + newprod.price;
            return {
                ...state, 
                itemsInBasket: [...state.itemsInBasket, newprod],
                basketTotal : price
            }
        case 'Delete_Items_InBasket': 
        return {
            ...state,
            itemsInBasket: state.itemsInBasket.filter(
                item => item.id !== action.payload[0]
            ),
            basketTotal: Math.round((state.basketTotal - action.payload[1]) * 100)/100
        }
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        error: null,
        isLoaded: false,
        products: [],
        itemsInBasket: [],
        basketTotal: 0,
        dispatch: action => { this.setState(state => reducer(state, action));
        }
    }
    componentDidMount() {
        fetch("https://react-shopping-cart-67954.firebaseio.com/products.json").then(res => res.json()).then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    products: result.products
                })
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            }
        );
    }

    render() {
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
