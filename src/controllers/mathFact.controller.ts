import pool from "../services/db";

export type MathFact = {
    id: number;
    text: string;
}

export class mathFactController {
    private amountOfFacts: Promise<number>;
    
    constructor(){
        async function getAmountOfFacts(): Promise<number> {
            const facts = await pool.query("SELECT * FROM mathfact");
            return facts.rows.length;
        }
        this.amountOfFacts = getAmountOfFacts();
    }

    public async getRandomFact(): Promise<MathFact> {
        const min = 1;
        const id: number = Math.floor(Math.random() * (min - (await this.amountOfFacts)) + min)
        const fact = await pool.query(`SELECT * FROM mathfact WHERE id=${id}`)
        return fact.rows[0]
    }

    public async createFact(text: string): Promise<MathFact> {
        const fact = await pool.query(`INSERT INTO mathfact (text) values (${text}) RETURNING *`)
        return fact.rows[0]
    }

    public async updateFact(id: number, text: string): Promise<MathFact> {
        const fact = await pool.query(`UPDATE mathfact set text=${text} where id=${id} RETURNING *`)
        return fact.rows[0]
    }

    public async deleteFact(id: number): Promise<MathFact> {
        const fact = await pool.query(`DELETE FROM mathfact WHERE id=${id}`)
        return fact.rows[0]
    }
}
