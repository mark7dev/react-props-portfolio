import React, { Component } from 'react';
import SkillList from './components/SkillList.js';
import EducationHistory from './components/EducationHistory.js';
import WorkHistory from './components/WorkHistory.js';

class App extends Component {
  render() {
    return (
      <div id="app-container">
        <SkillList />
        <EducationHistory />
        <WorkHistory />
      </div>
    );
  }
}

export default App;
