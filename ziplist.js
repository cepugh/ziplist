/** WOD E27: Ziplist puzzle
 * Created by baboooom on 2/6/17.
 */

const sampleData1 = ['a', 'b', 'c'];
const sampleData2 = [1, 2, 3];

function zipList(myArray1, myArray2) {
  const newArray = [];
  for (let i = 0; (i < myArray1.length) && (i < myArray2.length); i++) {
    newArray.push(myArray1[i]);
    newArray.push(myArray2[i]);
  }
  return newArray;
}

function zipListTheSimpleWay(myArray1, myArray2) {
  return _.flatten(_.zip(myArray1, myArray2));
}

console.log(zipList(sampleData1, sampleData2));
console.log(zipListTheSimpleWay(sampleData1, sampleData2));
