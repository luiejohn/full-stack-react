import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {

  renderContent(){
    // <a style={{height:'53px', fontWeight: '200'}} href="/auth/google">Login</a>
    switch (this.props.auth){
      case null:
        return;
      case false:
        return [
          <li key="21">
            <a style={{height:'53px', fontWeight: '200'}}>Signup</a>
          </li>, 
          <li key="123">
            <a style={{height:'52px', fontWeight: '200'}} className="modal-trigger" href="#modal1">Login</a>
          </li>
        ];
      default:
        return [
          <li key="1" style={{height:'53px'}}>
            <Payments />
          </li>,
          <li key="3" style={{ margin: '-1px 10px 0 10px', fontWeight:'200', color:'#eeeeee'}}>
            Your Credits: {this.props.auth.credits}
          </li>,
          <li key="2" style={{ margin: '-1px 10px 0 10px', fontWeight:'200'}} >
            <a style={{height:'53px', color:'#eeeeee'}} href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render(){
    console.log(this.props.auth);
    return [
      <div key="asd">
        <nav style={{height:'40px', backgroundColor:'#263238', color:'#eeeeee'}}>
          <div className="nav-wrapper">
            <Link style={{fontSize: '21px', marginLeft:'15px', height:'50px', marginTop: '-14px', fontWeight:'300'}}
              to={this.props.auth ? '/surveys' : '/'} 
              className="brand-logo"
            >Emaily</Link>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger" style={{height:'50px',marginTop: '-9px'}}><i  style={{height:'50px'}} className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down" style={{marginTop: '-12px', marginRight: '20px'}}>
              {this.renderContent()}
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li key="zxczx">
            <a style={{height:'52px', fontWeight: '200'}} className="modal-trigger sidenav-close" href="#modal1">Login</a>
          </li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">Javascript</a></li>
          <li><a href="mobile.html">Mobile</a></li>
        </ul>
      </div>
      ,
      <div className="row" style={{border:'0', margin:'0', height:'0'}}>
        <div key="axd" id="modal1" style={{border:'0'}} className="modal col s12 m8 offset-m2  l4 offset-l4">
          <div style={{paddingTop:'0'}} className="modal-content center-align col s12 m12 l12">
            <div className="right-align">
              <a href="#!" style={{marginRight:'-33px', padding:'0'}} className="modal-close waves-effect waves-green btn-flat">
                <i style={{fontSize:'30px'}} className="material-icons">highlight_off</i>
              </a>
            </div>

            <h5 style={{marginBottom: '20px', marginTop:'10px'}}>Login Using</h5>
              <div className="row">
                  <div className="col s12 m12 l12" style={{padding:'15px 30px' }}>
                    <a href="/auth/google" style={{width:'100%'}} className="waves-effect waves-light btn red lighten-1">Google</a>
                  </div>

                  <div className="col s12 m12 l12" style={{padding:'15px 30px'}} >
                    <a style={{width:'100%'}} className="waves-effect waves-light btn blue darken-3">Facebook</a>
                  </div>
              </div>
              <hr style={{border:'1px solid #bdbdbd'}}/>
              <div className="row" style={{padding:'0 30px'}}>
                <h5 style={{marginBottom: '20px'}}>Or Account Login</h5>
                <input type="email" className='col s12 m12 l12 validate' style={{border:'1px solid #bdbdbd'}} placeholder="Email" />
                <input type="password" className='col s12 m12 l12 validate' style={{border:'1px solid #bdbdbd'}} placeholder="Password" />
                <a  style={{marginTop:'20px'}} className="waves-effect waves-light btn">LOGIN</a>
              </div>

          </div>
        </div>
      </div>
    ]
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
