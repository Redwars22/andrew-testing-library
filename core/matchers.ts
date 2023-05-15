export abstract class AndrewMatchers {
	/**
	 * Tests if two values are the same. It doesn't check strictly for type.
	 * @param arg1 the first value
	 * @param arg2 the second value
	 */
	static shouldBeEqual(arg1, arg2): void {
		if (Boolean(arg1 == arg2)) {
			return;
		} else {
			throw `expected ${arg1}, but got ${arg2}`;
		}
	}

	/**
	 * Tests if two values aren't the same. If they are, the test fails.
	 * It doesn't check strictly for type.
	 * @param arg1 the first value
	 * @param arg2 the second value
	 */

	static shouldNotBeEqual(arg1, arg2): void {
		if (Boolean(arg1 != arg2)) {
			return;
		} else {
			throw `Didn't expect ${arg1}, but got ${arg2}`;
		}
	}

	/**
	 * Tests if two values are the same.
	 * Also, both values should be of the same type, or else the test fails.
	 * @param arg1 the first value
	 * @param arg2 the second value
	 */
	static shouldBeStrictEqual(arg1, arg2) {
		if (Boolean(arg1 === arg2)) {
			return;
		} else {
			throw `expected exactly ${arg1}, but got ${arg2}`;
		}
	}

	/**
	 * Tests if two values are different.
	 * Their types should also be different, or else the test fails.
	 * @param arg1 the first value
	 * @param arg2 the second value
	 */

	static shouldNotBeStrictEqual(arg1, arg2) {
		if (Boolean(arg1 !== arg2)) {
			return;
		} else {
			throw `Didn't expect exactly ${arg1}, but got ${arg2}`;
		}
	}

	/**
	 * Tests if a value is null. If it isn't, the test fails.
	 * @param arg value to be checked
	 */

	static shouldBeNull(arg) {
		if (arg === null) return;

		throw `${arg} was supposed to be null`;
	}

	/**
	 * Tests if a value isn't null. If it is, the test fails.
	 * @param arg value to be checked
	 */

	static shouldNotBeNull(arg) {
		if (arg != null) return;

		throw `${arg} wasn't supposed to be null, but is null`;
	}

	/**
   * Tests if a value is undefined. If it isn't, the test fails.
   * @param arg value to be checked
   */

	static shouldBeUndefined(arg) {
		if (arg === undefined) return;

		throw `${arg} was supposed to be undefined`;
	}

	/**
   * Tests if a value isn't undefined. If it is, the test fails.
   * @param arg value to be checked
   */

	static shouldNotBeUndefined(arg) {
		if (arg != undefined) return;

		throw `${arg} wasn't supposed to be undefined, but is undefined`;
	}

	/**
   * Tests if a value is truthy. If it's falsy, the test fails.
   * @param arg value to be checked
   */

	static shouldBeTruthy(arg: boolean) {
		if (arg === true) return;

		throw `${arg} was supposed to be truthy, but is falsy`;
	}

	/**
   * Tests if a value is falsy. If it's truthy, the test fails.
   * @param arg value to be checked
   */

	static shouldBeFalsy(arg: boolean) {
		if (arg === false) return;

		throw `${arg} was supposed to be falsy, but is truthy`;
	}

	/**
	 * Checks if the first number is greater than the second one. 
	 * Otherwise the test fails.
	 * @param arg1 first number
	 * @param arg2 second number
	 */

	static shouldBeGreaterThan(arg1: number, arg2: number) {
		if (arg1 > arg2) return;

		throw `${arg1} was supposed to be greater than ${arg2}, but it isn't!`;
	}

	/**
	 * Checks if the first number isn't greater than the second one. 
	 * Otherwise the test fails.
	 * @param arg1 first number
	 * @param arg2 second number
	 */

	static shouldNotBeGreaterThan(arg1: number, arg2: number) {
		if (!(arg1 > arg2)) return;

		throw `${arg1} wasn't supposed to be greater than ${arg2}, but it is!`;
	}

	/**
	* Checks if the first number is greater than or equal to the second one. 
	* Otherwise the test fails.
	* @param arg1 first number
	* @param arg2 second number
	*/

	static shouldBeGreaterThanOrEqual(arg1: number, arg2: number) {
		if (arg1 >= arg2) return;

		throw `${arg1} was supposed to be greater than or equal to ${arg2}, but it isn't!`;
	}

	/**
	* Checks if the first number isn't greater than or equal to the second one. 
	* Otherwise the test fails.
	* @param arg1 first number
	* @param arg2 second number
	*/

	static shouldNotBeGreaterThanOrEqual(arg1: number, arg2: number) {
		if (!(arg1 >= arg2)) return;

		throw `${arg1} wasn't supposed to be greater than or equal to ${arg2}, but it is!`;
	}

	/**
	* Checks if the first number is less than the second one. 
	* Otherwise the test fails.
	* @param arg1 first number
	* @param arg2 second number
	*/

	static shouldBeLessThan(arg1: number, arg2: number) {
		if (arg1 < arg2) return;

		throw `${arg1} was supposed to be less than ${arg2}, but it isn't!`;
	}

	/**
	* Checks if the first number isn't less than the second one. 
	* Otherwise the test fails.
	* @param arg1 first number
	* @param arg2 second number
	*/

	static shouldNotBeLessThan(arg1: number, arg2: number) {
		if (!(arg1 < arg2)) return;

		throw `${arg1} wasn't supposed to be less than ${arg2}, but it is!`;
	}

	/**
	* Checks if the first number is less than or equal to the second one. 
	* Otherwise the test fails.
	* @param arg1 first number
	* @param arg2 second number
	*/

	static toBeLessThanOrEqual(arg1: number, arg2: number) {
		if (arg1 <= arg2) return;

		throw `${arg1} was supposed to be less than or equal to ${arg2}, but it isn't!`;
	}

	/**
	* Checks if the first number isn't less than or equal to the second one. 
	* Otherwise the test fails.
	* @param arg1 first number
	* @param arg2 second number
	*/

	static shouldNotBeLessThanOrEqual(arg1: number, arg2: number) {
		if (!(arg1 <= arg2)) return;

		throw `${arg1} wasn't supposed to be less than or equal to ${arg2}, but it is!`;
	}

	/**
	 * Tests if all elements in both arrays are exactly the same.
	 * It passes if all elements are the same.
	 * Otherwise it fails and tells you the index of the first mismatch found.
	 *
	 * @param {any[]} arr1 The first array to compare
	 * @param {any[]} arr2 The second array to compare
	 */

	static shouldBeEqualArr(arr1: any[], arr2: any[]) {
		const len = arr1.length;

		for (let i = 0; i < len; i++) {
			if (arr1[i] === arr2[i]) {
				continue;
			} else {
				throw `${arr1[i]} was expected at position ${i}, but ${arr2[i]} was found!`;
			}
		}
	}

	/**
	 * Tests if both arrays are different.
	 * It passes if both arrays are different from each other.
	 * Otherwise it fails if all elements are the same.
	 *
	 * @param {any[]} arr1 The first array to compare
	 * @param {any[]} arr2 The second array to compare
	 */

	static shouldNotBeEqualArr(arr1: any[], arr2: any[]) {
		const len = arr1.length;
		let areAllEelementsEqual: boolean = true;

		for (let i = 0; i < len; i++) {
			if (arr1[i] !== arr2[i]) {
				areAllEelementsEqual = false;
			}
		}

		if (areAllEelementsEqual)
			throw `The two arrays are exactly the same, but weren't supposed to!`;
	}

	/**
	 * Compare two objects and fails the test if they are exactly the same.
	 *
	 * @param {object} obj1 - The first object to compare
	 * @param {object} obj2 - The second object to compare
	 */

	static shouldNotBeEqualObj(obj1, obj2) {
		if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
			throw `The two objects are exactly the same, but weren't supposed to!`;
		}
	}

	/**
	 * Compare two objects and fails the test if they aren't exactly the same.
	 *
	 * @param {object} obj1 - The first object to compare
	 * @param {object} obj2 - The second object to compare
	 */

	static shouldBeEqualObj(obj1, obj2) {
		if (JSON.stringify(obj1) !== JSON.stringify(obj2)) {
			throw `Expected ${JSON.stringify(obj1)}, but got ${JSON.stringify(obj2)}`;
		}
	}
}
