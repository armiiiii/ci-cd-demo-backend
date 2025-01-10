import { mathFactModel, MathFact } from '../models/mathFact.model'

export class mathFactController {
    private mfm: mathFactModel;

    constructor() {
        this.mfm = new mathFactModel();
    }

    public async getRandomFact(): Promise<MathFact> {
        return this.mfm.getRandomFact();
    }

    public async createFact(text: string): Promise<MathFact> {
        return this.mfm.createFact(text);
    }

    public async updateFact(id: number, text: string): Promise<MathFact> {
        return this.mfm.updateFact(id, text);
    }

    public async deleteFact(id: number): Promise<MathFact> {
        return this.mfm.deleteFact(id);
    }
}
