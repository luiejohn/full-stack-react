// SurveyField contains logic to render a single text input

import React from 'react';

export default ({ input, label, meta: {error, touched} }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{border:'1px solid #bdbdbd', padding:' 0 10px'}}/>
            <div className="red-text" style={{marginBottom: '20px'}}>
                {touched && error}
            </div>
            
        </div>
    );
};