// 지정한 매개 변수가 예상 범위를 벗어나면 setMonth ()는 그에 따라 Date 객체의 날짜 정보를 업데이트하려고 시도합니다.
function getLastDayOfMonth(year, month) {
  // month + 1을 하여 목표 월의 다음 달로 설정, 0을 통해 매 1일의 하루 전날로 설정, getDay로 요일 정보를 얻는다
  return new Date(year, month+1, 0).getDay();
}
// 2021년 1월 말일은 일요일
console.log(getLastDayOfMonth(2021, 0)); // => 0

// 2021년 12월 말일은 금요일
console.log(getLastDayOfMonth(2021, 11)); // => 5