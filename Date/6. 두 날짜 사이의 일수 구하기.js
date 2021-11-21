// 하루의 밀리초
const DAY_MILLISECONDS = 24 * 60 * 60 * 1000;
function diffDays(day1, day2){
  // 두 날짜를 밀리초로 바꾸어 그 차이의 절대값을 하루로 나누어 반환
  return Math.abs(Date.parse(day1) - Date.parse(day2)) / DAY_MILLISECONDS;
}

console.log(diffDays(new Date('2021/01/01'), new Date('2021/12/31'))); // => 364