function isPalindrome(str) {
  // 정규식을 이용해 필터링한 문자열 반환
  const filteredString = str.replace(/[^A-Za-z0-9]/ig, '');
  // 1줄에 120자 넘어가면 ESLint가 경고를 띄움
  const halfLength = filteredString.length/2;
  // 회문 검색을 위한 정규표현식 생성 (뒤에서 절반을 잘라 반전시켜 정규표현식으로 만듦)
  const halfString = new RegExp(`^${(filteredString.length % 2 ? filteredString.slice(Math.floor(halfLength)) : filteredString.slice(halfLength)).split('').reverse().join('')}`,'i');
  // 정규 표현식을 통해 회문인지 확인
  return halfString.test(filteredString);
}

// 문자열 s가 주어지면 영문자와 숫자만 고려하고 대소문자를 무시하여 회문인지 확인한다.
console.log(isPalindrome('A man, a plan, a canal: Panama')); // => true
console.log(isPalindrome('race a car')); // => false