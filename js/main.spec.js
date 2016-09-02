'use strict';


describe('calculator module tests', function(){

  it('should add two numbers', function(){
    //given
    var a = 1,
     b = 4,
    result;
    //when
    result = calculator.add(a,b);
    //then
    expect(result).toBe(5);
  });

  it('should return error while bad input in adding', function(){
    //given
    var a = 'bla',
     b = 'bla';
    //when
    //then
    expect(function(){calculator.add(a,b);}).toThrow(new Error("It should be a number"));
  });

  it('should substract two number', function(){
    //given
    var a = 3,
    b = 1,
    result;
    //when
    result = calculator.substract(a,b);
    //then
    expect(result).toBe(2);
  });

  it('should return error while bad input in substracting', function(){
    //given
    var a = 'bla',
     b = 'bla';
    //when
    //then
    expect(function(){calculator.substract(a,b);}).toThrow(new Error("It should be a number"));
  });

  it('should divide two numbers', function(){
    //given
    var a = 5,
    b = 2,
    result;
    //when
    result = calculator.divide(a,b);
    //then
    expect(result).toBe(2.5);
  });

  it('should return error after dividing by zero', function(){
    //given
    var a = 5,
    b = 0,
    result;
    //when
    //then
    expect(function(){calculator.divide(a,b);}).toThrow(new Error("You can't divide by zero"));
  });

  it('should return error while bad input in division', function(){
    //given
    var a = 'bla',
     b = 'bla';
    //when
    //then
    expect(function(){calculator.divide(a,b);}).toThrow(new Error("It should be a number"));
  });

  it('should multiply two numbers', function(){
    //given
    var a = 5,
    b = 2,
    result;
    //when
    result = calculator.multiply(a,b);
    //then
    expect(result).toBe(10);
  });

  it('should return error while bad input in multiplying', function(){
    //given
    var a = 'bla',
     b = 'bla';
    //when
    //then
    expect(function(){calculator.multiply(a,b);}).toThrow(new Error("It should be a number"));
  });

  it('should count factorial of number', function(){
    //given
    var a = 3,
    result;
    //when
    result = calculator.factorial(a);
    //then
    expect(result).toBe(6);
  });

  it('should return error while bad (string) input in factorial', function(){
    //given
    var a = 'bla';
    //when
    //then
    expect(function(){calculator.factorial(a);}).toThrow(new Error("It should be a number"));
  });


  it('should return error while below 0 input in factorial', function(){
    //given
    var a = -5;
    //when
    //then
    expect(function(){calculator.factorial(a);}).toThrow(new Error("Number should be positive"));
  });


  it('(recursion)should count factorial of number', function(){
    //given
    var a = 5,
    result;
    //when
    result = calculator.factorialRecursion(a);
    //then
    expect(result).toBe(120);
  });

  it('(recursion)should return error while bad (string) input in factorial', function(){
    //given
    var a = 'bla';
    //when
    //then
    expect(function(){calculator.factorialRecursion(a);}).toThrow(new Error("It should be a number"));
  });


  it('(recursion)should return error while below 0 input in factorial', function(){
    //given
    var a = -5;
    //when
    //then
    expect(function(){calculator.factorialRecursion(a);}).toThrow(new Error("Number should be positive"));
  });

  it('(recursion)should return 1 for input equals 0', function(){
    //given
    var a = 0,
    result;
    //when
    result = calculator.factorialRecursion(a);
    //then
    expect(result).toBe(1);
  });


});
