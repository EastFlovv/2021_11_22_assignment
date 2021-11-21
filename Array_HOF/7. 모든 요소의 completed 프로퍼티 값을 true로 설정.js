let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];
// 모든 요소의 completed를 true로 변경
const toggleCompletedAll = todos => todos.map(el => {
  el.completed = true;
  return el;
});

todos = toggleCompletedAll(todos);
console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: true }
]
*/