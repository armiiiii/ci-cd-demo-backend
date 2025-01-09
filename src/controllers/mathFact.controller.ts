import pool from "../services/db";

export type MathFact = {
    id: number;
    text: string;
}

export class mathFactController {
    public amountOfFacts: number;
    public min: number = 1;
    
    constructor(){
        this.amountOfFacts = 1;
        console.log(pool.query("SELECT * FROM mathfact"))
    }

    public async getRandomFact(): Promise<MathFact> {
        const id: number = Math.floor(Math.random() * (this.min -  this.amountOfFacts) + this.min)
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
