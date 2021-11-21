const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];
// key별로 새 배열을 반환
const getValues = (todos, key) => todos.map(el => el[key]);

console.log(getValues(todos, 'id')); // [3, 2, 1]
console.log(getValues(todos, 'content')); // ['HTML', 'CSS', 'Javascript']
console.log(getValues(todos, 'completed')); // [false, true, false]