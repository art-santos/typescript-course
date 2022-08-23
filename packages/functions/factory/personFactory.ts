export interface Person {
  name:string
  age: number
}

export const personFactory = (name:string, age:number): Person => {
  const person: Person =  {
    name,
    age
  }

  return person
}