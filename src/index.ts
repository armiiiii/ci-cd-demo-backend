import express, {Request, Response} from 'express';
import cors from 'cors';

import Calculator from './services/calculator';
import { mathFactController } from './controllers/mathFact.controller';

const app = express();
const calc = new Calculator();
const PORT = process.env.PORT || 8080;
const mfc = new mathFactController();

app.use(express.json());
app.use(cors());


app.get('/', (req: Request, res: Response) => {
    res.send("I am alive");
})

app.get('/randomFact', (req: Request, res: Response) => {
    mfc.getRandomFact().then((fact) => {
        res.send(fact);
    })
})

/*TODO: create and validate those requests */

// app.put('/updateFact', (req: Request, res: Response) => {
//     res.send(mfc.updateFact(req.body.id, req.body.text));
// })

// app.post('/createFact', (req: Request, res: Response) => {
//     res.send(mfc.createFact(req.body.text));
// })

app.post('/addition', (req: Request, res: Response) => {
    res.send(JSON.stringify(calc.addition(req.body.a, req.body.b)))
})

app.post('/subtraction', (req: Request, res: Response) => {
    res.send(JSON.stringify(calc.subtraction(req.body.a, req.body.b)))
})

app.post('/multiplication', (req: Request, res: Response) => {
    res.send(JSON.stringify(calc.multiplication(req.body.a, req.body.b)))
})

app.post('/division', (req: Request, res: Response) => {
    if (req.body.b === 0) {
        res.send("Can't divide by zero");
    } else {
        res.send(JSON.stringify(calc.division(req.body.a, req.body.b)))
    }
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})