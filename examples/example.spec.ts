import { AndrewTesting } from "../core/assert";

AndrewTesting.describe("This is your first test!", () => {
  AndrewTesting.test("Checks if the sum of two numbers is equal to 8", () => {
    const num1 = 4
    const num2 = 4;
    const sum = 8;

    AndrewTesting.shouldBeEqual(sum, 8);
  });
});
