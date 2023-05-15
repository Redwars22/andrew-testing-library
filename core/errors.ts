const term = require( 'terminal-kit' ).terminal ;

export class TestingErrors {
    public static handleError(title: string, message: string) {
        term.bold.red(` > ❌️ ${title}: TEST FAILED - ${message}\n`);
    }
}