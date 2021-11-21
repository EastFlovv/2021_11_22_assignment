let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];
// 프로퍼티 값으로 정렬
// 비교식의 양수 음수 0값으로 정렬을 하기 때문에 -가 아닌 비교 연산자 사용
const sortBy = (todos, key) => 
  todos.sort((x, y) => x[key] >= y[key]);

todos = sortBy(todos, 'id');
console.log(todos);
/*
[
  { id: 1, content: 'Javascript', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'HTML', completed: false }
]
*/
console.log(sortBy(todos, 'content'));
/*
[
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/
console.log(sortBy(todos, 'completed'));
/*
[
  { id: 1, content: 'Javascript', completed: false },
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true }
]
*/