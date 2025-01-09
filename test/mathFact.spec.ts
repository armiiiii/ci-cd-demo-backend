import { assert } from "chai";

import {MathFact, mathFactController} from "../src/controllers/mathFact.controller";

const mfc = new mathFactController();


let fact: MathFact;
describe("src/services/controller/mathFact.controller.ts CRUD Operations", () => {
    it("Create", () => {
        const text = "Exponentiation - is a operation, where we multiply some value by itself n times. E.G 4^3 = 4 * 4 * 4";
        mfc.createFact(text).then((factFetched) => {
            assert.typeOf(factFetched, 'MathFact');
            assert.equal(factFetched.text, text);
            fact = factFetched;
        });
    })
    it("Update", () => {
        const text = "Exponentiation - is an operation, where we multiply some value by itself n times. \n \
                      4^3 = 4 * 4 * 4";
        const id: number = fact.id;
        mfc.updateFact(id, text).then((factFetched) => {
            assert.typeOf(factFetched, 'MathFact');
            assert.equal(factFetched.text, text);
        });
    })
    it("Get Random Fact", () => {
        mfc.getRandomFact().then((fact) => {
            assert.typeOf(fact, 'MathFact');
        })
    })
    it("Delete", () => {
        mfc.deleteFact(fact.id).then((factFetched) => {
            assert.equal(fact.id, factFetched.id);
        })
    })
})