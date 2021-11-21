const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];
// 배열의 id 프로퍼티 값중 가장 큰 id를 반환 빈 배열은 0을 반환
// 빈 배열시 0 리턴, 빈 배열이 아니면 reduce로 처리
const getMaxId = todos => {
  if(!todos.length) return 0;
  return todos.reduce((max, el) => el.id > max ? el.id : max, 0);
};

console.log(getMaxId(todos)); // 3
console.log(getMaxId([])); // 0