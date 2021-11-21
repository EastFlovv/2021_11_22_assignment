function compress(str){
  // 스택으로 풀기?
  let stack = [];
  let answer = '';

  for(const spl of str){
    if(!stack.length) stack.push(spl);
    else if(stack[stack.length-1] !== spl) {
      answer += stack.length > 1 ? `${stack[0]}${stack.length}` : stack[0];
      stack = [spl];
    } else stack.push(spl);
  }
  answer += stack.length > 1 ? `${stack.length}${stack[0]}` : stack[0];
  return answer;
}


console.log(compress('ABBCCCE')); // => AB2C3E