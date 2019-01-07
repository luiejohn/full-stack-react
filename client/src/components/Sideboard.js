import React from 'react';

const Sideboard = (props) => {
    return (
        <div style={{height:'150px'}}>
            <div className="row" style={{marginTop:'15px'}}>
                <div className="col s5 ">
                    <div className="right-align" style={{width:'50px', height:'50px', borderRadius:'50%', backgroundColor:'#c1c1c1', margin:'0' }}>

                    </div>
                </div>
                <div className="col s7 " style={{height:'50px',lineHeight:'100%'}}>
                    Welcome {props.user}!
                </div>
                
            </div>
            
        </div>

    );

}

export default Sideboard;