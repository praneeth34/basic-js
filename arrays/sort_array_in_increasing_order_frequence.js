/**
 * You are given an array. Your task is to sort the array in given manner. Print the elements in increasing order of the frequency. If frequency is same print smaller one first.

Input Description:
You are given a number ‘n’. Then in next line n space separated numbers.

Output Description:
Print the array as mentioned

Sample Input :
4
1 1 3 2
Sample Output :
2 3 1
 */

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  let cond = +userInput[0];
  let myArr = userInput[1].split(" ").map((val) => +val);

  if (cond === myArr.length) {
    let freqArr = [];
    let freq = {};

    function removeDuplicate(data) {
      return data.filter((value, index) => data.indexOf(value) === index);
    }

    for (let ind = 0; ind < myArr.length; ind++) {
      if (freq[myArr[ind]] === undefined) {
        freq[myArr[ind]] = 1;
      } else {
        freq[myArr[ind]]++;
      }
    }

    let keys = Object.keys(freq);

    for (let ind = 0; ind < keys.length; ind++) {
      let obj = {
        value: keys[ind],
        count: freq[keys[ind]],
      };
      freqArr.push(obj);
    }

    freqArr = freqArr.sort(function (val1, val2) {
      if (val1.count !== val2.count) {
        return val1.count - val2.count;
      } else {
        return val1.value - val2.value;
      }
    });

    let outArr = [];

    for (let ind = 0; ind < freqArr.length; ind++) {
      for (let innerInd = 0; innerInd < freqArr[ind].count; innerInd++) {
        outArr.push(freqArr[ind].value);
      }
    }

    console.log(removeDuplicate(outArr).join(" "));
  } else {
    console.log("the condition is not correct, check input again");
  }
  //end-here
});
