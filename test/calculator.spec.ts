import {assert} from 'chai';
import Calculator from '../src/services/calculator';

const calc = new Calculator();

describe("Calculator Backend Check", () => {
    it("Must return sum", () => {
        assert.equal(calc.addition(1, 2), 3)
    });
    it("Must return sum", () => {
        assert.equal(calc.subtraction(1, 2), -1)
    });
    it("Must return sum", () => {
        assert.equal(calc.multiplication(1, 2), 2)
    });
    it("Must return sum", () => {
        assert.equal(calc.division(1, 2), 0.5)
    });
    it("Must return sum", () => {
        assert.throw(() => {calc.division(1, 0)}, "Can't divide by zero")
    });
})