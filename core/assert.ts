import { TestingErrors } from "./errors";
import { AndrewMatchers } from "./matchers";

const term = require('terminal-kit').terminal;

export abstract class AndrewTesting extends AndrewMatchers {
	private static greetUser() {
		term.bold.blue("Andrew Testing Library - v1.0.0 Developer Preview\n");
	};

	static test(title: string, func: () => void) {
		try {
			func();
		} catch (err) {
			TestingErrors.handleError(title, err);
			return;
		}

		term.bold.green(` > ✅️ ${title}: TEST PASSED!\n`)
	}

	static describe(title: string, func: () => void) {
		this.greetUser();
		
		try {
			term.bold.white(`\n\n🧪️ TEST SUIT - ${title}:\n`);
			func();
		} catch(err){
			TestingErrors.handleError(`Test suit: ${title}`, err);
			return;
		}
	}
}