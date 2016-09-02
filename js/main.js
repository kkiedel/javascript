'use strict';

var calculator = (
    function() {
        var factorialRecursion;
        return {
            factorialRecursion: function factorialRecursion(a) {
                if (typeof(a) != 'number' || Math.floor(a) != a) throw new Error("It should be a number");
                if (a < 0) throw new Error("Number should be positive");
                if (a < 2) {
                    return 1;
                } else {
                    return a * factorialRecursion(a - 1);
                }
            },
            add: function(a, b) {
                if (typeof(a) != 'number' || typeof(b) != 'number') throw new Error("It should be a number");
                return a + b;
            },
            substract: function(a, b) {
                if (typeof(a) != 'number' || typeof(b) != 'number') throw new Error("It should be a number");
                return a - b;
            },
            divide: function(a, b) {
                if (typeof(a) != 'number' || typeof(b) != 'number') throw new Error("It should be a number");
                if (b === 0) throw new Error("You can't divide by zero");
                return a / b;
            },
            multiply: function(a, b) {
                if (typeof(a) != 'number' || typeof(b) != 'number') throw new Error("It should be a number");
                return a * b;
            },
            factorial: function(a) {
                if (typeof(a) != 'number' || Math.floor(a) != a) throw new Error("It should be a number");
                if (a < 0) throw new Error("Number should be positive");
                var result = 1,
                    i = 1;
                for (i; i <= a; i++) {
                    result = result * i;
                }
                return result;
            }
        }
    })();
