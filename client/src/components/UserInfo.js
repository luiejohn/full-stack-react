import React from 'react';

const UserInfo = (props) => {
    console.log(props.user);
    return (
        <div style={{height:'100px', fontSize: '18px', padding:'0 15px'}}>
            Welcome back {props.user}!
        </div>
    );

}

export default UserInfo;