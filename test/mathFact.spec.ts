import { assert } from "chai";
import sinon from 'sinon';
import { faker } from '@faker-js/faker';

import { MathFact, mathFactModel } from "../src/models/mathFact.model";
import { mathFactController } from "../src/controllers/mathFact.controller";

let text = "Exponentiation - is an operation, where we multiply some value by itself n times. E.G 4^3 = 4 * 4 * 4";

describe("src/services/controller/mathFact.controller.ts CRUD Operations", () => {

    const stubedFact: MathFact = {
        id: faker.number.int(),
        text: text,
    } 

    it("Create Fact", async () => {
        const stub = sinon.stub(mathFactModel.prototype, 'createFact').resolves(stubedFact);
        const mfc = new mathFactController();
        const fact = await mfc.createFact(stubedFact.text);
        assert.equal(stub.calledOnce, true);
        assert.equal(fact.id, stubedFact.id);
        assert.equal(fact.text, stubedFact.text);
        assert.equal(fact.id, stubedFact.id);
    })
    it("Update Fact", async () => {
        stubedFact.text = "Exponentiation - is a function, y=a^x, where a = const, x = arg. ";
        const stub = sinon.stub(mathFactModel.prototype, 'updateFact').resolves(stubedFact);
        const mfc = new mathFactController();
        const fact = await mfc.updateFact(stubedFact.id, stubedFact.text);
        assert.equal(stub.calledOnce, true);
        assert.equal(fact.id, stubedFact.id);
        assert.equal(fact.text, stubedFact.text);
        assert.equal(fact.id, stubedFact.id);
    })
    it("Get Random Fact", async () => {
        const mfc = new mathFactController();
        const fact = await mfc.getRandomFact();
        assert.containsAllKeys(fact, ['id', 'text']);
    })
    it("Delete", async () => {
        const stub = sinon.stub(mathFactModel.prototype, 'deleteFact').resolves(stubedFact);
        const mfc = new mathFactController();
        const fact = await mfc.deleteFact(stubedFact.id);
        assert.equal(stub.calledOnce, true);
        assert.equal(fact.id, stubedFact.id);
        assert.equal(fact.text, stubedFact.text);
        assert.equal(fact.id, stubedFact.id);
    })
})