const arr = [2, 3, 14, 5, 6, 7];

let evenSum = 0;
let oddSum = 0;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    evenSum += arr[i];
  } else {
    oddSum += arr[i];
  }
}

console.log("EvenSum :", evenSum);
console.log("OddSum :", oddSum);
console.log(oddSum > evenSum ? oddSum : evenSum);
