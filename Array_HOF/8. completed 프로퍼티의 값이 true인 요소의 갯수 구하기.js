const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];
// completed가 true인 요소의 개수를 반환 for, forEach 사용금지
// reduce 사용하기 el.completed가 true이면 count + 1을 반환 아니면 count를 그대로 반환, 초기값은 0
const countCompletedTodos = todos => 
  todos.reduce((count,el) => el.completed ? count + 1 : count , 0);

console.log(countCompletedTodos(todos)); // 1