// // Task - 1
// let n = 10;
// let k = 5;
// for (let i = 0; i < n; i++) {
//   console.log("Count - " + i + "\n\n" + k + "\n");
// }
// // Task - 1
// // Task - 2
// let narx = 12000;

// for (let i = 0.1; i <= 1; i += 0.1) {
//   let jami = Math.round(narx * i);
//   console.log(jami);
// }
// // Task - 2
// // Task - 3
// let n = 10;

// let S = 0;
// for (let i = n; i <= 2 * n; i++) {
//   S += i ** 2;
// }
// console.log(S);
// // Task - 3
// // Task - 4
// let n = 10;

// let S = 0;
// for (let i = 1; i <= n; i++) {
//   S += i ** (n - i + 1);
// }
// console.log(S);
// // Task - 4
// // Task - 5
// let a = 1;
// let b = 7;

// for (let i = a; i <= b; i++) {
//   console.log(`${i} `.repeat(i));
// }
// // Task - 5
// // Task - 6
// let n = 10;
// for (let i = 1; i <= n; i++) {
//   if (n % i == 0) {
//     console.log(i);
//   }
// }
// // Task - 6
// // Task - 7
// let n = 17;
// let k = 5;

// let butun = 0;
// let qoldiq = n;

// while (qoldiq >= k) {
//   qoldiq -= k;
//   butun++;
// }

// console.log(butun);
// console.log(qoldiq);
// // Task - 7
// // Task - 8
// let k = 128;
// let n = 0;

// while (k >= 2) {
//   k -= k / 2;
//   n++;
// }
// console.log(n);
// // Task - 8
// // Task - 9
// let a = 5;
// let b = 10;
// let count = 0;
// for (let i = a; i <= b; i++) {
//   console.log(i);
//   count++;
// }
// console.log("Count:" + count);
// // Task - 9
// // Task - 10
// let a = 5;
// let b = 10;
// let count = 0;
// for (let i = b-1; i > a; i--) {
//   console.log(i);
//   count++;
// }
// console.log("Count:" + count);
// // Task - 10
// // Task - 11
// let kg_narx = 12000;

// for (let i = 1; i <= 10; i++) {
//   console.log(i * kg_narx);
// }
// // Task - 11
// Task - 12
// let narx = 12000;

// for (let i = 0.2; i <= 1; i += 0.2) {
//   let jami = Math.round(narx * i);
//   console.log(jami);
// }
// // Task - 12
// // Task - 13
// let a = 5;
// let b = 10;
// let count = 0;
// for (let i = a; i < b; i++) {
//   count += i;
// }
// console.log("Count:" + count);
// // Task - 13
// // Task - 14
// let a = 5;
// let b = 10;
// let count = 1;
// for (let i = a; i < b; i++) {
//   count = count * i;
// }
// console.log("Count:" + count);
// // Task - 14
// // Task - 15
// let a = 5;
// let b = 10;
// let count = 0;
// for (let i = a; i < b; i++) {
//   count += i ** 2;
// }
// console.log("Count:" + count);
// // Task - 15
// // Task - 16
// let n = 50;
// let S = 0;
// for (let i = 1; i <= n; i++) {
//   S += 1 / i;
// }
// console.log("S:" + S);
// // Task - 16
// // Task - 17
// let n = 50;
// let S = 0;
// for (let i = 1; i <= n; i += 0.1) {
//   S += 1 * i;
// }
// console.log("S:" + Math.round(S));
// // Task - 17
// // Task - 18
// let n = 50;
// let S = 0;
// for (let i = 1; i <= n; i++) {
//   S += 2 * i - 1;
//   console.log(`${i}^2 = ${S}`);
// }
// console.log("S:" + S);
// // Task - 18
// // Task - 19
// let a = 13.2;
// let n = 25;

// let S = 1;
// for (let i = 1; i < n; i++) {
//   S *= i;
// }

// console.log(`${a}^${n} = ${S}`);
// // Task - 19
// // Task - 20
// let a = 2;
// let n = 5;

// let result = 1;
// for (let i = 1; i <= n; i++) {
//   result *= a; // a ni i-darajaga oshirish
//   console.log(`${a}^${i} = ${result}`);
// }
// // Task - 20
// // Task - 21
// let a = 5;
// let n = 10;

// let S = 1;
// let result = 1;

// for (let i = 1; i <= n; i++) {
//   result *= a;
//   S += result;
// }

// console.log(`S = ${S}`);
// // Task - 21
// // Task - 22
// let n = 10;
// let S = 0;

// for (let i = 1; i <= n; i++) {
//   let factorial = 1;

//   for (let j = 1; j <= i; j++) {
//     factorial *= j;
//   }

//   S += factorial;
// }

// console.log(`S = ${S}`);
// // Task - 22
// // Task - 23
// let N = 10;
// let K = 10;
// let S = 0;

// for (let i = 1; i <= N; i++) {
//   let power = Math.pow(i, K);
//   S += power;
// }

// console.log(`S = ${S}`);
// // Task - 23
// // Task - 24
// let N = 10;
// let S = 0;

// for (let i = 1; i <= N; i++) {
//   let power = i ** i;
//   S += power;
// }

// console.log(`S = ${S}`);
// // Task - 24
// // Task - 25
// let A = 10;
// let B = 20;

// for (let i = A; i <= B; i++) {
//   let count = i - A + 1;
//   console.log(`${i} `.repeat(count));
// }
// // Task - 25
// // Task - 26
// let n = 10;
// let S = 0;
// let count = 0;

// for (let i = 1; i <= n; i++) {
//   if (n % i === 0) {
//     S += i;
//     count++;
//     console.log(i);
//   }
// }

// console.log(count);
// console.log(S);
// // Task - 26
// // Task - 27
// let n = 10;

// let tub = true;

// if (n <= 1) {
//   tub = false;
// } else {
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       tub = false;
//       break;
//     }
//   }
// }

// if (tub) {
//   console.log(`${n} tub son.`);
// } else {
//   console.log(`${n} tub emas.`);
// }
// // Task - 27
// // Task - 28
// let N = 10;

// let result = "";
// for (let i = 1; i <= N; i++) {
//   for (let j = 1; j <= i; j++) {
//     result += j + " ";
//   }
//   result += "\n";
// }

// console.log(result);
// // Task - 28
// // Task - 29
// let A = 10;
// let B = 5;
// let count = 0;
// let remaining = A;

// while (remaining >= B) {
//   remaining -= B;
//   count++;
// }
// console.log(count);
// console.log(remaining);
// // Task - 29
// // Task - 30
// let A = 10;
// let B = 5;
// let count = 0;
// let remaining = A;

// while (remaining >= B) {
//   remaining -= B;
//   count++;
// }

// console.log(count);
// // Task - 30

// DOMLA KO'PINI SAVOLIGA TUSHUNMADIM GPTNI HAM QO'LI BOR BUNDA G'ALATI SAVOLLAR YOZILGAN EKAN SHUNGA GPT BILAN ISHLADIM BAZILARIDA.
