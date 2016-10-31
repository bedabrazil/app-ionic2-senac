import {Academic} from './academic';
export class Course{
  constructor(
    public name: string,
    public inicialDate: Date,
    public finalDate: Date,
    public description: string,
    public academic: Academic
  ){}
}