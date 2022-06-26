import Person from "../Person";

export default class Employee extends Person{

    private _nameOfRole:string = "";
    private _numOfMonth: number = 0;
    private _salary: number = 0;

    get NameOfRole(): string {
      return this._nameOfRole;
    }
    set NameOfRole(nameOfRole: string) {
      this._nameOfRole = nameOfRole;
    }

    get NumOfMonth(): number {
      return this._numOfMonth;
    }
    set NumOfMonth(numOfMonth: number) {
      this._numOfMonth = numOfMonth;
    }

    get Salary(): number {
        return this._salary;
    }
    set Salary(salary: number) {
        this._salary = salary;
    }

    constructor(id:number,name:string,age:number,city:string,country:string,img:string,nameOfRole: string,numOfMonth: number,salary: number) {
        super(id,name,age,city,country,img);
        this.NameOfRole = nameOfRole;
        this.NumOfMonth = numOfMonth;
        this.Salary = salary;
        this.Img = img;
    }
}