
function getFirstDayOfMonth (year, month) {
  return new Date(year, month, 0).getDay() + 1;
}

// 2021년 1월 1일은 금요일
console.log(getFirstDayOfMonth(2021, 0)); // => 5

// 2021년 12월 1일은 수요일
console.log(getFirstDayOfMonth(2021, 11)); // => 3