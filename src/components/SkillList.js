import React from 'react';
import Skill from './Skill.js';
import {skills} from '../data/datasource';

class SkillList extends React.Component {
    render () {
        return (
            <section>
                <h4>Skills</h4>
                <div class="skills-list">
                    { skills.map(function(skill) {
                        return <Skill strongs={ skill } />
                    })}
                </div>
            </section>
        )
    }
}



export default SkillList;