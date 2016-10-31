export class Company{
  constructor(
    public title: string,
    public subTitle: string,
    public initialDate: Date,
    public finalDate: Date,
    public description: string,
    public occupation: string,
    public mainResponsibilities: string[]
    ){}
};