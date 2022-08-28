// @ts-check
'use strict';

const path = require('path');
const { argv } = require('yargs');
const TestCase = require('./helper/test-case');
const TestDiscovery = require('./helper/test-discovery');

const testSuite =
	(argv.language)
		? TestDiscovery.loadSomeTests(argv.language)
		// load complete test suite
		: TestDiscovery.loadAllTests();

const update = !!argv.update;

// define tests for all tests in all languages in the test suite
for (const [languageIdentifier, files] of testSuite) {
	describe("Testing language '" + languageIdentifier + "'", function () {
		this.timeout(10000);

		for (const filePath of files) {
			const fileName = path.basename(filePath, path.extname(filePath));

			it("– should pass test case '" + fileName + "'", () => {
				TestCase.runTestCase(languageIdentifier, filePath, update ? 'update' : 'insert');
			});
		}
	});
}
