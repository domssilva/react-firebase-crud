import React from 'react';
import {connect} from 'react-redux';
import {toggleLesson} from '../../redux/lessons/actions';

import ActiveModule from './ActiveModule';

import './styles.css';

function Lessons({modules, dispatch}) {

  const handleClick = (module, lesson) => {
    dispatch(toggleLesson(module, lesson))
  }

  return (
    <main>
      <ActiveModule/>
      <section>
        {modules.map(module => (
          <div key={module.id} className="lesson">
            {module.title}
            <ul>
              {
                module.lessons.map(lesson => (
                  <li key={lesson.id}>
                    {lesson.title}
                    <button onClick={() => handleClick(module, lesson)}>
                      toggle
                    </button>
                  </li>
                ))
              }
            </ul>
          </div>
        ))}
      </section>
    </main>
  )
}

export default connect(state => ({modules: state.modules}))(Lessons);
