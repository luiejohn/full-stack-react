import React from 'react';
import header1 from '../images/hd01-edit.jpg';
import header3 from '../images/hd03-edit.jpg';
import padlock from '../images/padlock-icon.jpg';
import clock from '../images/clock-icon.jpg';
import like from '../images/like.png';


const Landing = () =>{
    return (
        <div>
            <h1 className="center-align" style={{position:'absolute',left: '0', right:'0',margin:'auto', zIndex:'50', color:'white', marginTop: '150px'}}>Emailer</h1>
            <a href="#modal1" className="waves-effect waves-light btn red lighten-1 modal-trigger" style={{position:'absolute',left: '0', right:'0',margin:'auto', zIndex:'50', color:'white', marginTop: '340px', width:'150px'}}>Get Started</a>
            <div className="slider green accent-3">
                <ul className="slides">
                <li>
                    <img src={header1} alt="pic1"/>

                    <div className="caption center-align" style={{marginTop:'130px'}}>
                        <h5 className="light grey-text text-lighten-3"><i style={{fontSize:'25px', marginRight:'15px'}} className="material-icons">mail_outline</i>Fast and Easy.</h5>
                    </div>
                </li>
                <li>
                    <img src={header3} alt="pic1"/>
                    <div className="caption center-align" style={{marginTop:'130px'}}> 
                        <h5 className="light grey-text text-lighten-3">Secure and Cost Effetive.</h5>
                    </div>
                </li>

                </ul>
            </div>
      
            <hr style={{margin:'0'}}/>
            <div className="row" style={{minHeight:'375px',marginTop:'0px',marginBottom:'100px', padding:'0 20px'}}>
                <div className="col s12 m4 l4" style={{textAlign:'center'}}>
                    <div className="row">
                        <div className="col s12">
                            <img src={like} className="material-icons" style={{paddingRight:'0',marginTop:'32px', width:'63px', height:'63px'}} />
                            <h4 style={{marginBottom:'10px', marginTop:'10px', paddingLeft:'10px'}}>Easy</h4>
                        </div>
                    </div>   
                    <p style={{margin: '0 15px', backgroundColor:'#c1c1c1', minHeight:'150px', padding:'35px 25px 35px 25px', fontSize:'14px'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                </div>
                <div className="col s12 m4 l4" style={{textAlign:'center'}}>
                    <div className="row">
                        <div className="col s12">
                            <img src={clock} className="material-icons" style={{paddingRight:'0',marginTop:'32px', width:'73px', height:'73px'}} />
                            <h4 style={{marginBottom:'10px', marginTop:'0', paddingLeft:'10px'}}>Fast</h4>
                        </div>
                    </div>               
                    <p style={{margin: '0 15px', backgroundColor: '#c1c1c1', minHeight:'150px', padding:'35px 25px 35px 25px', fontSize:'14px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

                <div className="col s12 m4 l4" style={{textAlign:'center'}}>
                    <div className="row">
                        <div className="col s12">
                            <img src={padlock} className="material-icons" style={{paddingRight:'0',marginTop:'30px', width:'65px', height:'75px'}} />
                            <h4 style={{marginBottom:'10px', marginTop:'0', paddingLeft:'10px'}}>Secure</h4>
                        </div>
                    </div> 
                    <p style={{margin: '0 15px', backgroundColor: '#c1c1c1', minHeight:'150px', padding:'35px 25px 35px 25px', fontSize:'14px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>


            {/* <div className="row" style={{minHeight:'375px', margin:'80px 0 60px 0', padding: '0 40px'}}>
                <div className="col s12 m6 l6" style={{textAlign:'center'}}>
                    <h5>Random Title Here!</h5>
                    <p style={{marginLeft: '30px', marginRight: '30px', minHeight:'150px', padding:'35px 0 35px 0', fontSize:'14px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    <br/><br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                </div>
                <div className="col s12 m6 l5 offset-l1">
                    <p style={{backgroundColor: '#43a047', height:'350px', fontSize:'14px', borderRadius:'5px'}}>
                        Image Here.
                    </p>
                </div>
            </div> */}

        </div>
    );

}

export default Landing;