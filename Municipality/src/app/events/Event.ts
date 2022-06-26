import Person from "../Person";

export default class EventsComponent{

    // NameEvent
    private _nameEvent: string = "";

    get NameEvent(): string {
      return this._nameEvent;
    }
    set NameEvent(nameEvent: string) {
      this._nameEvent = nameEvent;
    }
  
    // Address
    private _address: string = "";
    get Address(): string {
      return this._address;
    }
    set Address(address: string) {
      this._address = address;
    }
  
    // Code
    private _code: number = 0;
    public get Code(): number {
      return this._code;
    }
    public set Code(code: number) {
      if(code > 300 && code < 700 ) this._code = code;
    }
  

    private _guest:number = 0;
    get Guest(): number {
      return this._guest;
    }
    set Guest(guest: number){
      if(guest <= 500000)
        this._guest = guest;
    }

    private _manager!: Person;
    get Manager(): Person {
        return this._manager;
      }
      set Manager(manager: Person) {
        this._manager = manager;
      }

    public constructor(
      nameEvent: string,
      address: string,
      code: number,
      guest: number,
      manager: Person,
    ) {
      this.NameEvent = nameEvent;
      this.Code = code;
      this.Address = address;
      this.Guest = guest;
      this.Manager = manager;
    }
  }