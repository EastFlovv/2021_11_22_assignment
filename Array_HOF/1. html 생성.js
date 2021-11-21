const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];
// html 문자열을 생성하여 반환
// for, for...in, for...of 사용불가
// 배열의 메서드를 사용하기 -> map, filter, reduce
// map을 통해 string배열을 만들고 줄바꿈(\n)으로 join
function makeHtml(todos){
  const htmlScripts = todos.map(el => 
    `<li id="${el.id}">
  <label><input type="checkbox"${el.completed ? " checked" : ''}>${el.content}</label>
</li>`);
  return htmlScripts.join('\n');
}

console.log(makeHtml(todos));