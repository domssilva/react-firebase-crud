import React from 'react';
import {connect} from 'react-redux';

function ActiveModule({activeModule, activeLesson}) {
  return (
    <section>
      <p>Active Module: {activeModule.title}</p>
      <p>Active Lesson: {activeLesson.title}</p>
    </section>
  )
}

export default connect(state => ({
  activeModule: state.activeModule,
  activeLesson: state.activeLesson,
}))(ActiveModule);
