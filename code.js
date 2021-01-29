function assertObjectsEqual(actual, expected, testName) {
  // your code here
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected){
      console.log('passed');
  }else{
      console.log("FAILED ["+ testName +"] Expected " + expected + ", but got " + actual );
  }
}
