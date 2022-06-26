import Person from "../Person";
import Event from "./Event";


export const EVENTS: Event[] = [
    new Event("Omer Adam","Yarkon Park",456,70,new Person(1,"ohad",12,"dsd","dsbvds","https://cdn.pixabay.com/photo/2016/06/21/15/50/photo-1471331_960_720.jpg")),
    new Event("Eyal Golan","Blumpiled",654,50000,new Person(2,"Shlomi",22,"Elad","Israel","me")),
    new Event("Sarit Haddad","Jerusalem",536,65246,new Person(3,"Shalom",22,"Elad","Israel","me")),
    new Event("Eden Hasson","Sultan pool",457,85,new Person(4,"Shoval",22,"Elad","Israel","me")),
    new Event("Justein Bibber","Yarkon Parkr",647,65026,new Person(5,"Israel",22,"Elad","Israel","me")),
    new Event("Hodaya","Nokia",423,623506,new Person(6,"Yossi",22,"Elad","Israel","me")),
    new Event("Sia","London",302,65056,new Person(7,"Elad",22,"Elad","Israel","me")),
    new Event("Noa Kirel","Petah-Tikva",349,655706,new Person(8,"shiran",22,"Elad","Israel","me")), 
];