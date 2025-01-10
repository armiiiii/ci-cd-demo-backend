import {assert} from 'chai';
import Calculator from '../src/services/calculator';

const calc = new Calculator();

describe("src/services/calculator.ts", () => {
    it("Must return Sum", () => {
        assert.equal(calc.addition(1, 2), 3)
    });
    it("Must return Subtraction", () => {
        assert.equal(calc.subtraction(1, 2), -1)
    });
    it("Must return Multiplication", () => {
        assert.equal(calc.multiplication(1, 2), 2)
    });
    it("Must return Dicision", () => {
        assert.equal(calc.division(1, 2), 0.5)
    });
    it("Must throw an Error (\"Can't divide by zero\")", () => {
        assert.throw(() => {calc.division(1, 0)}, "Can't divide by zero")
    });
})