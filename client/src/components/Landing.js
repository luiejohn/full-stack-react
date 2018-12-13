import React from 'react';

const Landing = () =>{
    return (
        <div>
            <div className="slider blue-grey darken-3">
                <ul className="slides">
                <li>
                    <img src="https://lorempixel.com/580/250/nature/1"/> 
                    
                    <div className="caption center-align">
                        <h1>Emaily</h1>
                        <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                    </div>
                </li>
                <li>
                    <img src="https://lorempixel.com/580/250/nature/2"/>
                    <div className="caption center-align">
                    <h1>Emaily</h1>
                    <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                    </div>
                </li>

                </ul>
            </div>
      
            <hr style={{margin:'0'}}/>
            <div className="row">
                <div className="col s4" style={{height: '250px', textAlign:'center'}}>
                    <h4 style={{marginBottom:'22px'}}>Header 1</h4>
                    <p style={{marginLeft: '30px', marginRight: '30px', backgroundColor:'#c1c1c1', minHeight:'150px', padding:'35px 20px 0 20px', fontSize:'14px'}}>asdsad asd asd asd asda 1231aseas aweqasdas qweasdasd asqweqwewqsad qweqweas dqwe a qwe asd qwweqwewqeqasdad asdwqe</p>
                </div>
                <div className="col s4" style={{height: '250px', textAlign:'center'}}>
                    <h4 style={{marginBottom:'22px'}}>Header 2</h4>
                    <p style={{marginLeft: '30px', marginRight: '30px', backgroundColor: '#c1c1c1', minHeight:'150px', padding:'35px 20px 0 20px', fontSize:'14px'}}>asdsad asd asd asd asda 1231aseas aweqasdas qweasdasd asqweqwewqsad qweqweas dqwe a qwe asd qwweqwewqeqasdad asdwqe</p>
                </div>
                <div className="col s4" style={{height: '250px', textAlign:'center'}}>
                    <h4 style={{marginBottom:'22px'}}>Header 3</h4>
                    <p style={{marginLeft: '30px', marginRight: '30px', backgroundColor: '#c1c1c1', minHeight:'150px', padding:'35px 20px 0 20px', fontSize:'14px'}}>asdsad asd asd asd asda 1231aseas aweqasdas qweasdasd asqweqwewqsad qweqweas dqwe a qwe asd qwweqwewqeqasdad asdwqe</p>
                </div>
            </div>
        </div>
    );

}

export default Landing;