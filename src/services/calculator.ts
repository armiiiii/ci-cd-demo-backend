export default class Calculator {
    public addition(a: number, b: number): number {
        return a+b;
    }
    public subtraction(a: number, b: number): number {
        return a-b;
    }
    public multiplication(a: number, b: number): number {
        return a/b;
    }
    public division(a: number, b: number): number {
        if (b === 0) {
            throw Error("Can't divide by zero");
        }
        return a/b;
    }
}