let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];
// unshift 사용 금지 -> 스프레드 함수 사용
const addTodo = (todos, newTodo) => [newTodo, ...todos];

todos = addTodo(todos, { id: 4, content: 'Test', completed: false });
console.log(todos);
/*
[
  { id: 4, content: 'Test', completed: false },
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
]
*/