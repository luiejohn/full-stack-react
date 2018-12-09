import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';


class Payments extends Component {
    render(){

        return(
            <StripeCheckout
                name="Emaily"
                description="$5 for 5 email credits"
                amount={500}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >

                <button className="btn" style={{height:'20px', fontSize:'12px', fontWeight: '200',lineHeight:'100%', margin: '-1px 10px 0 10px', fontWeight:'200'}}>Add Credits</button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payments);