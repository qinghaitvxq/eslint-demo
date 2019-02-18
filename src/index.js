/* ESLINT 检查代码的三个方面
  1. programmer errors
  2. best practices
  3. style issues
*/

// console
//   .log(
//     'hello'
//     + 'my'
//     + 'friend',
//   );

// /* error type 1 */
// for (let i = 0; i < 10; i--) {
//     console.log(i);
// }

// /* error type 2 */
// if ([] == false) {
//     console.log('test');
// }

//----------------------------------
/* error type 1 */
for (let i = 0; i < 10; i--) {
  console.log(i);
}

/* error type 2 */
const test = [1, 2, 3, 4, 5];
if ([] == false) {
  test.push(7);
}
console.log("hello" + "my" + "friend");
