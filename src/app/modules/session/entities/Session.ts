import { Formation } from "src/app/entities/Formation/formation";
import { Formateur, Responsable } from "src/app/entities/Utilisateur/utilisateur";
import { Salle } from "../../salle/entities/salle";

export class Session{
    public idSession : number;
    public codeSession : string;
    public nom : string;
    public description : string;
    public statut : string;
    public type : string;
    public dateDebut : Date;
    public dateFin : Date;
    public prix : number;
    public respFor : Responsable;
    public formation : Formation;
    public formateur : Formateur;
}