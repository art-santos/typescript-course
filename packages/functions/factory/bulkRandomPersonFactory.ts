import axios from "axios"
import { Person, personFactory } from "./personFactory";
import { TData, TDataRandomPersonGenerator } from "./personTypes";

type OneHundredNumber= number;



const getBulkData = async (amount: OneHundredNumber): Promise<TDataRandomPersonGenerator> => {
 const data = axios.get(`https://randomuser.me/api/?results=${amount}`)
 return (await data).data.results
}

export const bulkRandomPersonGenerator = async (amount: OneHundredNumber): Promise<Person[]> => {
  const data: TDataRandomPersonGenerator = await getBulkData(amount)
  const filteredData:Person[] = data.map((item:TData) => {
    const name:string = item.name.first + ' ' + item.name.last;
    const age: number = item.dob.age;
    return personFactory(name, age)
  })
  console.log(filteredData)
  return filteredData
}