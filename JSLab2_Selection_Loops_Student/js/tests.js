
// test the workoutTax001 function.
QUnit.test('Test workoutTax001 function', function( assert ) {
    // test values 1
    let arrSalary = workoutTax001(30000); 
    assert.equal(arrSalary[0], 9000, "Tax value < 45000  correct");
    assert.equal(arrSalary[1], 21000, "Net salary value < 45000 correct");
    // test values 2
    arrSalary = workoutTax001(45000); 
    assert.equal(arrSalary[0], 13500, "Tax value >= 45000 correct");
    assert.equal(arrSalary[1], 31500, "Net salary value >= 45000 correct");
});

// test the workoutTax002 function.
QUnit.test('Test workoutTax002 function', function( assert ) {
  // test values 1
  let arrSalary = workoutTax002(30000); 
  assert.equal(arrSalary[0], 9000, "Tax value < 30000 correct");
  assert.equal(arrSalary[1], 21000, "Net salary value < 30000 correct");
  // test values 2
  arrSalary = workoutTax002(45000); 
  assert.equal(arrSalary[0], 22500, "Tax value >= 45000 correct");
  assert.equal(arrSalary[1], 22500, "Net salary value >= 45000 correct");
});

// test the workoutTax003 function.
QUnit.test('Test workoutTax003 function', function( assert ) {
  // test values 1
  let arrSalary = workoutTax003(29000); 
  assert.equal(arrSalary[0], 4350, "Tax value < 30000 correct");
  assert.equal(arrSalary[1], 24650, "Net salary value < 30000 correct");
  // test values 2
  arrSalary = workoutTax003(33000); 
  assert.equal(arrSalary[0], 9900, "Tax value >= 30000 < 45000 correct");
  assert.equal(arrSalary[1], 23100, "Net salary value 2 correct");
  //test values 3
  arrSalary = workoutTax003(50000); 
  assert.equal(arrSalary[0], 25000, "Tax value >= 45000 correct");
  assert.equal(arrSalary[1], 25000, "Net salary value 3 correct");
});

// test the checkSwitch function.
QUnit.test('Test checkSwitch function', function( assert ) {
  // test values 1
  //let strMessage = checkSwitch(1); 
  assert.equal(checkSwitch(1), "SNAP", "Value 1 returned SNAP.");
  assert.equal(checkSwitch(2), "CRACKLE", "Value 1 returned CRACKLE.");
  assert.equal(checkSwitch(3), "POP", "Value 1 returned POP.");
  assert.equal(checkSwitch(4), "EXIT", "Value 1 returned EXIT.");
  assert.equal(checkSwitch(75), "DEFAULT", "Other value returned DEFAULT.");
  
});

// test the while loop function.
QUnit.test('Test while loop function', function( assert ) {
  let testPassed1, testPassed2, testPassed3 = "false"
  let arrStart = [1,2,3,4,5,6,7,8,9,10]
  let arrProcessed = whileLoop(arrStart);
  if(arrProcessed.length <= 5){
    testPassed1 = true;
  }
  assert.equal(testPassed1, true, "While loop test1 worked");
  arrStart = ["1","2","3","4","5","6","7","8"]
  arrProcessed = whileLoop(arrStart);
  if(arrProcessed.length <= 5){
    testPassed2 = true;
  }
  assert.equal(testPassed2, true, "While loop test2 worked");
  arrStart = ["1","2","3"]
  arrProcessed = whileLoop(arrStart);
  if(arrProcessed.length <= 5){
    testPassed3 = true;
  }
  assert.equal(testPassed3, true, "While loop test3 worked");
});

// test the do loop function.
QUnit.test('Test do loop function', function( assert ) {
  let arrTest1 = [1,2];
  let arrTest2 = [1,2,3,4];
  assert.equal(doLoop(2).toString(), arrTest1.toString(), "do loop test1 worked");
  assert.equal(doLoop(4).toString(), arrTest2.toString(), "do loop test2 worked");
});

// test the for loop function.
QUnit.test('Test for loop function', function( assert ) {
  
  let arrTest1 = [1,2,3,4,5];
  let arrResult1 = [2,3,4,5,6];
  let arrTest2 = [1,2,3,4,"hello","5",6];
  let arrResult2 = [2,3,4,5,"hello", "5",7];
  assert.equal(forLoop(arrTest1).toString(), arrResult1.toString(), "for loop test1 worked");
  assert.equal(forLoop(arrTest2).toString(), arrResult2.toString(), "for loop test2 worked (includes non numeric elements)");

});


// test the splitString function.
QUnit.test('Test split string function', function( assert ) {
  
  let strTest1 = "a,b,c,d,e";
  let arrResult1 = ["1.a","2.b","3.c","4.d","5.e"];
  let strTest2 = "one,two,three,four,five";
  let arrResult2 = ["1.one","2.two","3.three","4.four","5.five"];

  assert.equal(splitString(strTest1).toString(), arrResult1.toString(), "Split string function test1 worked");
  assert.equal(splitString(strTest2).toString(), arrResult2.toString(), "Split string function test2 worked");
});

// test the displayObject function.
QUnit.test('Test display object function', function( assert ) {
  
  let inventorJS = {
    firstName: "Brendan",
    lastName: "Eich",
    dob: 1961,
    invented: "Javascript"
  };
  let inventorPython = {
    firstName: "Guido",
    lastName: "van Rossum",
    dob: 1956,
    invented: "Python"
  };
  let strInventor1 = "Brendan Eich 1961 Javascript";
  let strInventor2 = "Guido van Rossum 1956 Python";

  assert.equal(displayObject(inventorJS), strInventor1, "displayObject function test1 worked");
  assert.equal(displayObject(inventorPython), strInventor2, "displayObject function test2 worked");
});


// test the makeString function.
QUnit.test('Test makeString function', function( assert ) {
  
  let arrTest1 = ["hello","world","from","APP"];
  let strResult1 = "Hello world from APP.";
  let arrTest2 = ["it","is","a","wonderful","day"];
  let strResult2 = "It is a wonderful day.";

  assert.equal(makeString(arrTest1), strResult1, "Make string function test1 worked");
  assert.equal(makeString(arrTest2), strResult2, "Make string function test2 worked");
  
});

// test the makeString2 function.
QUnit.test('Test makeString2 function', function( assert ) {
  const arrPunct = [".","!",";"];
  let arrTest1 = ["hello","world","from","APP"];
  let strResult1 = "Hello world from APP.";
  let arrTest2 = ["it","is","a","wonderful","day!"];
  let strResult2 = "It is a wonderful day!";
  let arrTest3 = ["it","is","a","wonderful","day","!"];
  let strResult3 = "It is a wonderful day!";

  assert.equal(makeString2(arrTest1,arrPunct).toString(), strResult1, "Make string2 function test1 worked");
  assert.equal(makeString2(arrTest2,arrPunct).toString(), strResult2, "Make string2 function test2 worked");
  assert.equal(makeString2(arrTest3,arrPunct).toString(), strResult3, "Well done you removed the space between the last worrd and the punctuation mark!");
});