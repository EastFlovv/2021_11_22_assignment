// 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램을 작성하세요.
function countUpperCase(word) {
  // match 메서드는 결과에 일치하는 요소의 배열을 반환한다.
  return word.match(/[A-Z]/g).length;
}

console.log(countUpperCase('KoreaTimeGood')); // => 3