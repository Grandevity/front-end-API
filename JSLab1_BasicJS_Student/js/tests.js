//capture and check console.log 
(function () {
    var log = console.log;
    console.log = function (msg) {
      log.call(this, 'Your code wrote the following to the console log: ', ...arguments);
      return msg;
    };
  }());

QUnit.test('Write "Hello APP!" to the console', function( assert ) {
    var logit = ''; 
    logit = msgConsole();
    assert.equal(logit, "Hello APP!" );
});

//capture and check window.alert 
(function () {
    var alert = window.alert;
    window.alert = function (msg) {
      alert.call(this, 'Your code wrote the following to the alert window: '+ msg, ...arguments);
      return msg;
    };
  }());

QUnit.test('Write "Hello APP!" to the alert window', function( assert ) {
    var alertit = ''; 
    alertit = callAlert("Hello APP!");
    assert.equal(alertit, "Hello APP!" );
});

QUnit.test( "Declare a numeric variable", function( assert ) {
    assert.equal(decNumeric(), 22 );
});

QUnit.test( "Declare a string variable", function( assert ) {
  assert.equal(decString(), 'Hello APP!');
});


QUnit.test( "Declare a boolean variable", function( assert ) {
    assert.equal( decBoolean(), true );
});


QUnit.test( "Arithmetic operator test - mulitply", function( assert ) {
    assert.equal( arithmeticOp(20, 10), 200 );

});

QUnit.test( "Concate string variables", function( assert ) {
  assert.equal(stringOp('JavaScript', 'Rocks!'), "JavaScript Rocks!" );

});

QUnit.test( "Comparison operator - less than true", function( assert ) {
  assert.equal(compOp(23, 24), true );

});

QUnit.test( "Comparison operator - less than false", function( assert ) {
  assert.equal(compOp(25, 24), false );

});
QUnit.test( "Logical operator - && false", function( assert ) {
  assert.equal(logicOp(12, 30, 11, 11), true );

});

QUnit.test( "Logical operator - && false", function( assert ) {
  assert.equal(logicOp(12, 30, 10, 11), false );

});

QUnit.test( "Change string var to a number", function( assert ) {
    assert.equal(typeof(changeStrToNumber("Five")), "number");
  });

QUnit.test( "Cast string vars to numbers", function( assert ) {
    assert.equal(castStrToNumber("5","2.2"), 7.2);
    assert.equal(castStrToNumber("7","3"), 10);
  });

QUnit.test("Test returnArray function", function( assert ) {
  var arrTest1 = [5,4,5,4];
  var arrTest2 = ["one", "two", "three", "four"];
  assert.equal(JSON.stringify(returnArray(5,4,5,4)), JSON.stringify(arrTest1));
  assert.equal(JSON.stringify(returnArray("one", "two", "three", "four")), JSON.stringify(arrTest2));
});

QUnit.test("Test arrayPop function", function( assert ) {
  var arrToPop1 = [5,4,5,4];
  var arrTest1 = [5,4,5];
  var arrToPop2 = ["one", "two", "three", "four"];
  var arrTest2 = ["one", "two", "three"];
  assert.equal(JSON.stringify(arrayPop(arrToPop1)), JSON.stringify(arrTest1));
  assert.equal(JSON.stringify(arrayPop(arrToPop2)), JSON.stringify(arrTest2));
});
