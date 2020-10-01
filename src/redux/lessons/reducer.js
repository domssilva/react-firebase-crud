let lessons = [
  {
    id: 1,
    title: 'learn react',
    active: true,
    lessons: [
      {id: 1, title: 'first lesson'},
      {id: 2, title: 'second lesson'},
      {id: 3, title: 'third lesson'},
    ]
  },
  {
    id: 2,
    title: 'learn redux',
    active: true,
    lessons: [
      {id: 1, title: 'first lesson'},
      {id: 2, title: 'second lesson'},
    ]
  },
];

const reducer = () => {
  return lessons;
}

export default reducer;
