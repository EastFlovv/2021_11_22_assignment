// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로 소문자는 대문자로 변환하여 출력하는 프로그램을 작성하세요.
function toggleCase(word) {
  // 정규표현식 안쓰고, 정규표현식을 사용하여 각 요소를 1대1 매칭시켜 요소를 반환할 수 있는가?
  return [...word].map(el => el.charCodeAt() < 97 ? el.toLowerCase() : el.toUpperCase()).join('');
}

console.log(toggleCase('StuDY')); // => 'sTUdy'