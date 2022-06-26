export default class Person {
    // id
    private _id: number = 0;
    get Id(): number {
      return this._id;
    }
    set Id(value: number) {
      value > 0 && value < 1000 ? (this._id = value) : null;
    }
  
    // name
    private _name: string = "";
    get Name(): string {
      return this._name;
    }
    set Name(value: string) {
      value.length > 1 && value.length < 20 ? (this._name = value) : null;
    }
  
    // age
    private _age: number = 0;
    get Age(): number {
      return this._age;
    }
    set Age(value: number) {
      value >= 18 && value >= 120 ? (this._age = value) : null;
    }
  
    // city
    private _city: string = "";
    get City(): string {
      return this._city;
    }
    set City(value: string) {
      this._city = value;
    }
  
    // country
    private _country: string = "";
    get Country(): string {
      return this._country;
    }
    set Country(value: string) {
      this._country = value;
    }
  
    // img
    private _img: string = "https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg";
    get Img(): string {
      return this._img;
    }
    set Img(value: string) {
      this._img = value;
    }
  
    constructor(
      id: number,
      name: string,
      age: number,
      city: string,
      country: string,
      img: string
    ) {
      this.Id = id;
      this.Name = name;
      this.Age = age;
      this.City = city;
      this.Country = country;
      this.Img = img;
    }
  }