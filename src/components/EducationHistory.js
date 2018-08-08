import React from 'react';
import Degree from './Degree.js';
import {eduList} from '../data/datasource';

class EducationHistory extends React.Component {
    render () {
        return (
            <section>
                <h4>Education</h4>
                {
                    eduList.map(function(degree){
                       return <Degree 
                        institute = {degree.institute}
                        field = {degree.fieldOfStudy}
                        dates = {degree.dates} />
                    })
                }
            </section>
        )
    }
}



export default EducationHistory;