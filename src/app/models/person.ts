import {Social} from './social';
export class Person{
  constructor(
    public name:string,
    public placeOfBirth:string,
    public address: string,
    public cellphone: string,
    public email: string,
    public birthDay: Date,
    public image: string,
    public social: Social[]
  ){}
}