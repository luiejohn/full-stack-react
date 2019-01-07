import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SurveryList from './surveys/SurveyList';
import UserInfo from './UserInfo';
import Sideboard from './Sideboard';

// import Spinner from './Spinner/spinner';

class Dashboard extends Component {

    // state = {
    //     loading: true
    // }

    render(){
        let name = this.props.auth ? this.props.auth.firstName : " ";


        return (
            <div className="row" style={{margin:'0'}}>
                <div className="col s12 m3 l2" style={{minHeight:'740px'}}>
                    <Sideboard user={name}/>
                </div>
                <div className="col s12 m9 l10" style={{padding:'0', margin:'0', borderLeft:'1px solid #ccc', backgroundColor:'#c1c1c1'}}>
                    <hr />
                    <div style={{padding:'0 15px',}}>
                        <SurveryList/>  
                    </div>
                    <div className="fixed-action-btn">
                        <Link to="/surveys/new" className="btn-floating btn-large red">
                            <i className="large material-icons">add</i>
                        </Link>
                    </div>
                </div>
            </div>

        );

    }

};


function mapStateToProps({ auth }) {
    return { auth };
  }

export default connect(mapStateToProps)(Dashboard);