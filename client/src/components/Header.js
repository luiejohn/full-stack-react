import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {

  renderContent(){
    switch (this.props.auth){
      case null:
        return;
      case false:
        return [
          <li>
            <a style={{height:'53px', fontWeight: '200'}} href="/auth/google">About</a>
          </li>, 
          <li>
            <a style={{height:'53px', fontWeight: '200'}} href="/auth/google">Login</a>
          </li>
        ];
      default:
        return [
          <li key="1" style={{height:'53px'}}>
            <Payments />
          </li>,
          <li key="3" style={{ margin: '-1px 10px 0 10px', fontWeight:'200'}}>
            Your Credits: {this.props.auth.credits}
          </li>,
          <li key="2" style={{ margin: '-1px 10px 0 10px', fontWeight:'200'}} >
            <a style={{height:'53px'}} href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render(){
    console.log(this.props.auth);
    return (
      <nav style={{height:'40px', backgroundColor:'#263238'}}>
        <div className="nav-wrapper">
          <Link style={{fontSize: '21px', marginLeft:'15px', height:'50px', marginTop: '-14px', fontWeight:'300'}}
            to={this.props.auth ? '/surveys' : '/'} 
            className="brand-logo"
          >Emaily</Link>
          <ul className="right" style={{marginTop: '-12px', marginRight: '20px'}}>
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
