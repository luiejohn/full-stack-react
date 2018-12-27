import React from 'react';

const Landing = () =>{
    return (
        <div>
            <h1 className="center-align" style={{position:'absolute',left: '0', right:'0',margin:'auto', zIndex:'50', color:'white', marginTop: '150px'}}>Emailer</h1>
            <a href="#modal1" className="waves-effect waves-light btn deep-orange lighten-1 modal-trigger" style={{position:'absolute',left: '0', right:'0',margin:'auto', zIndex:'50', color:'white', marginTop: '340px', width:'150px'}}>Get Started</a>
            <div className="slider green accent-3">
                <ul className="slides">
                <li>
                    <img src="https://lorempixel.com/580/250/nature/1" alt="pic1"/>

                    <div className="caption center-align" style={{marginTop:'130px'}}>
                        <h5 className="light grey-text text-lighten-3"><i style={{fontSize:'25px', marginRight:'15px'}} className="material-icons">mail_outline</i>Fast and Easy.</h5>
                    </div>
                </li>
                <li>
                    <img src="https://lorempixel.com/580/250/nature/2" alt="pic1"/>
                    <div className="caption center-align" style={{marginTop:'130px'}}> 
                        <h5 className="light grey-text text-lighten-3">Secure and Cost Effetive.</h5>
                    </div>
                </li>

                </ul>
            </div>
      
            <hr style={{margin:'0'}}/>
            <div className="row" style={{minHeight:'375px',margin:'40px 0',padding:'0 60px'}}>
                <div className="col s12 m4 l4" style={{textAlign:'center'}}>
                    <div className="row">
                        <i className="material-icons col s5 right-align" style={{fontSize:'48px',paddingRight:'0', marginTop:'19px'}} >mail_outline</i>
                        <h4 className="col s7 left-align" style={{marginBottom:'20px', paddingLeft:'10px'}}>Easy</h4>
                    </div>
                    <p style={{margin: '0 15px', backgroundColor:'#c1c1c1', minHeight:'150px', padding:'35px 25px 35px 25px', fontSize:'14px'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                </div>
                <div className="col s12 m4 l4" style={{textAlign:'center'}}>
                    <div className="row">
                        <i className="material-icons col s5 right-align" style={{fontSize:'48px',paddingRight:'0', marginTop:'19px'}} >access_time</i>
                        <h4 className="col s7 left-align" style={{marginBottom:'20px', paddingLeft:'10px'}}>Fast</h4>
                    </div>                
                    <p style={{margin: '0 15px', backgroundColor: '#c1c1c1', minHeight:'150px', padding:'35px 25px 35px 25px', fontSize:'14px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

                <div className="col s12 m4 l4" style={{textAlign:'center'}}>
                    <div className="row">
                        <i className="material-icons col s5 right-align" style={{fontSize:'48px',paddingRight:'0', marginTop:'19px'}} >lock_outline</i>
                        <h4 className="col s7 left-align" style={{marginBottom:'20px', paddingLeft:'10px'}}>Secure</h4>
                    </div> 
                    <p style={{margin: '0 15px', backgroundColor: '#c1c1c1', minHeight:'150px', padding:'35px 25px 35px 25px', fontSize:'14px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>

            <div className="row" style={{minHeight:'375px', margin:'40px 0 60px 0', padding: '0 40px'}}>
                <div className="col s12 m6 l6" style={{textAlign:'center'}}>
                    <h5>Random Title Here!</h5>
                    <p style={{marginLeft: '30px', marginRight: '30px', minHeight:'150px', padding:'35px 20px 35px 20px', fontSize:'14px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    <br/><br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                </div>
                <div className="col s12 m6 l6">
                    <p style={{paddingLeft: '100px', marginRight: '100px', backgroundColor: '#43a047', height:'350px', fontSize:'14px', borderRadius:'5px'}}>
                        Image Here.
                    </p>
                </div>
            </div>

        </div>
    );

}

export default Landing;