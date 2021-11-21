let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];
// 입력받은 id값을 가진 객체의 특정 프로퍼티 값 반전
// for문, forEach 사용금지
const toggleCompletedById = (todos, id) => todos.map(el => {
  // 요소의 id가 목표와 같을경우 completed를 반전시킴
  el.completed = el.id === id ? !el.completed : el.completed;
  return el; // 요소 반환
});

todos = toggleCompletedById(todos, 2);
console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/