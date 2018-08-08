
import React from 'react';
import Job from './Job';
import {jobsList} from '../data/datasource';

class WorkHistory extends React.Component{
    render(){
        return(
            <section>
                <h4>Work Experience</h4>
                {
                    jobsList.map(function(job){
                        return <Job 
                        end = {job.years.end}
                        start = {job.years.start}
                        title = {job.title}
                        company = {job.company}
                        description = {job.description}
                    />
                    })

                }
            </section>
        );
    }
}

export default WorkHistory;