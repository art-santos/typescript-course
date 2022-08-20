import { log } from "./basics";

export const Sum = (n1: number, n2:number, showResult?:boolean):number => {
  const result:number = n1 + n2;
  showResult && log(result);
  return result;
}

export const Subtraction = (n1: number, n2:number, showResult?:boolean):number => {
  const result = n1 - n2;
  showResult && log(result);
  return result;
}

export const Multiplication = (n1: number, n2: number, showResult?:boolean):number => {
  const result = n1 * n2;
  showResult && log(result);
  return result;
}

export const Division = (n1: number, n2: number, showResult?:boolean):number => {
  const result = n1/n2;
  showResult && log(result);
  return result;
}