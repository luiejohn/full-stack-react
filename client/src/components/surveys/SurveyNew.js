//Survey shows SurveyForm
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFromReview from './SurveyFormReview';

class SurveyNew extends Component {

    state = {showFormReview:false};

    renderContent() {
        if(this.state.showFormReview){
            return <SurveyFromReview onCancel={()=> this.setState({ showFormReview: false })}/>;
        }
        return <SurveyForm onSurveySubmit={() => this.setState({ showFormReview: true })}/>
    }


    render(){
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}
//for clearing the data in form fields
export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);