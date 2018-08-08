import React from 'react';

class Skill extends React.Component {
    render () {
        return (
            <span class="skills-list__single"> {this.props.strongs} </span>
        )
    }
}


export default Skill;