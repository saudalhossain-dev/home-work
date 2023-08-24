// ============== Namota ===============

let startNum = 5;
let endNum = 10;
let timesNum = 0;
let result = 0;

while (startNum <= endNum) {
  console.log(`${startNum} এর ঘরের নামতা শুরুঃ`);
  timesNum = 1;
  while (timesNum <= 10) {
    result = startNum * timesNum;
    console.log(`${startNum} X ${timesNum} = ${result}`);
    timesNum++;
  }
  startNum++;
}
