let initialState = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: 'learn react',
      lessons: [
        {id: 1, title: 'first lesson'},
        {id: 2, title: 'second lesson'},
        {id: 3, title: 'third lesson'},
      ]
    },
    {
      id: 2,
      title: 'learn redux',
      lessons: [
        {id: 1, title: 'first lesson'},
        {id: 2, title: 'second lesson'},
      ]
    },
  ],
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'TOGGLE_LESSON':
      return {
        ...state,
        activeLesson: action.lesson,
        activeModule: action.module,
      }
    default:
      return state;
  }
}

export default reducer;
