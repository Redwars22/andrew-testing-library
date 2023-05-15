"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("../core/assert");
assert_1.AndrewTesting.describe("This is your first test!", function () {
    assert_1.AndrewTesting.test("Checks if the sum of two numbers is equal to 8", function () {
        var num1 = 4;
        var num2 = 4;
        var sum = 8;
        assert_1.AndrewTesting.shouldBeEqual(sum, 8);
    });
});
