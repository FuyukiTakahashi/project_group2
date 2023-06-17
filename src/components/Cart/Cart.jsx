import React, { Component } from 'react'
import CartColumns from './CartColumn';
import EmptyCart from './EmptyCart';
import { ProductConsumer} from '../../context';
import CartList from './CartList';
import CartTotals from "./CartTotals";
import Footer from '../Footer';
import Navbar from '../Navbar';
import Announcement from '../Announcement';
import Newsletter from '../Newsletter';

export default class Store extends Component {
    render() {
        return (
            <section>      
                <Navbar/>
                <Announcement />
                <ProductConsumer>
                    {value => {
                        const { cart } = value;
                        if (cart.length > 0) {
                            console.log(cart.length);
                            return (
                                <React.Fragment>
                                    <div>Your Bag</div>
                                    <CartColumns />
                                    <CartList value={value} />
                                    <CartTotals value={value} history={this.props.history} />
                                </React.Fragment>
                            );
                        } else {
                            return <EmptyCart />;
                        }
                    }}
                </ProductConsumer>
                <Newsletter/>
                <Footer/>
            </section>
        );
    }
}

