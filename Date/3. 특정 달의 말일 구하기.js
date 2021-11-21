// 지정한 매개 변수가 예상 범위를 벗어나면 setMonth ()는 그에 따라 Date 객체의 날짜 정보를 업데이트하려고 시도합니다.
function getLastDateOfMonth(year, month){
  // month + 1을 하여 목표 월의 다음 달로 설정, 0을 통해 매 1일의 하루 전날로 설정, getDay로 요일 정보를 얻는다
  return new Date(year, month+1, 0).getDate();
}

// 2021년 1월의 마지막 날은 31일
console.log(getLastDateOfMonth(2021, 0)); // => 31

// 2021년 2월의 마지막 날은 28일
console.log(getLastDateOfMonth(2021, 1)); // => 28