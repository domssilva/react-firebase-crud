import React from 'react';
import {connect} from 'react-redux';

import './styles.css';

function Lessons({modules}) {

  return (
    <div>
      {modules.map(lesson => (
        <div key={lesson.id} className="lesson">
          {lesson.title}
        </div>
      ))}
    </div>
  )
}

export default connect(state => ({modules: state}))(Lessons);
