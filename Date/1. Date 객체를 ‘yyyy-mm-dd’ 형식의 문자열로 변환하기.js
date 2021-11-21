// KST는 표준시보다 9시간 빠르다
const KR_TIME_SET = 9 * 60 * 60 * 1000;

// toLocaleDateString을 사용해도 충분히 가능하나 한자리수의 월, 일 앞에 0을 붙이는 과정에 의해 코드가 길어지는것을 편법으로 피함
function formatDate(date){
  date.setTime(date.getTime() + KR_TIME_SET); // 표준시에서 9시간을 더함
  return date.toISOString().slice(0, 10); // ISOString으로 변환하여 날짜 부분만 출력
}

console.log(formatDate(new Date('2021/07/24'))); // => "2021-07-24"
console.log(formatDate(new Date('1900/1/4'))); // => "1900-01-04"