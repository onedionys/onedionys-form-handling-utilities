// testFormHandlingUtils.js

const assert = require('assert');
const { validateEmail, validateURL } = require('../src/formHandlingUtils');

describe('Form Handling Utilities', function() {
    describe('validateEmail()', function() {
        it('should return true for valid email', function() {
            assert.equal(validateEmail('example@example.com'), true);
        });

        it('should return false for invalid email', function() {
            assert.equal(validateEmail('example.com'), false);
        });
    });

    describe('validateURL()', function() {
        it('should return true for valid URL', function() {
            assert.equal(validateURL('https://www.example.com'), true);
        });

        it('should return false for invalid URL', function() {
            assert.equal(validateURL('example.com'), false);
        });
    });
});
