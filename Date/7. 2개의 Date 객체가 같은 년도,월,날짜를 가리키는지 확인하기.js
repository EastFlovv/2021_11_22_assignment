function isEqualDate(day1, day2){
  return day1.toDateString() === day2.toDateString();
}

console.log(isEqualDate(new Date('2021/07/24'), new Date('2021/07/24'))); // => true
console.log(isEqualDate(new Date('2021/07/24'), new Date('2022/07/2'))); // => false