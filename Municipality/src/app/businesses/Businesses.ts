export default class Businesses {

    private _nameOfRole:string = "";
    private _idBusiness: number = 0;
    private _numEmployee: number = 0;
    private _monthlyProfit: number = 0;


    get NameOfRole(): string {
      return this._nameOfRole;
    }
    set NameOfRole(nameOfRole: string) {
      this._nameOfRole = nameOfRole;
    }

    get IdBusiness(): number {
      return this._idBusiness;
    }
    set IdBusiness(idBusiness: number) {
        if(idBusiness >= 1000 && idBusiness <= 5000)
            this._idBusiness = idBusiness;
    }

    get NumEmployee(): number {
        return this._numEmployee;
    }
    set NumEmployee(numEmployee: number) {
        this._numEmployee = numEmployee;
    }

    get MonthlyProfit(): number {
        return this._monthlyProfit;
    }
    set MonthlyProfit(monthlyProfit: number) {
        this._monthlyProfit = monthlyProfit;
    }

    constructor(nameOfRole: string,idBusiness: number,numEmployee: number,monthlyProfit: number) {
        this.NameOfRole = nameOfRole;
        this.IdBusiness = idBusiness;
        this.NumEmployee = numEmployee;
        this.MonthlyProfit = monthlyProfit;
    }
}