import axios from 'axios';
import { Person, personFactory } from './personFactory';
import { TDataRandomPersonGenerator } from './personTypes';



export const getData = async () => {
  const data = axios.get('https://randomuser.me/api/');
  return (await data).data.results;
}

export const randomPersonFactory = async ():Promise<Person> => {
  const data:TDataRandomPersonGenerator = await getData()
  const name:string = data[0].name.first + ' ' + data[0].name.last;
  //const nat:string = data[0].picture.thumbnail
  const age:number = data[0].dob.age;

  return personFactory(name, age)
}