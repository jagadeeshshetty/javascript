
let count = 1;

function recursionFn() {
  console.log(`recursionFn ${count}`);
  if (count === 10) return;
  count++;
  recursionFn();
}

recursionFn();
