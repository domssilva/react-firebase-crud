export const toggleLesson = (lesson, module) => {
  return {
    type: 'TOGGLE_LESSON',
    module,
    lesson,
  }
}