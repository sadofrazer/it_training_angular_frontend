import { Session } from "inspector";
import { Apprenant } from "../Utilisateur/utilisateur";

export class Inscription{
    public idInscription : number;
    public codeInscription : string;
    public statut : string;
    public dateInscription : Date;
    public dateFin : Date;
    public prix : number;
    public apprenant : Apprenant;
    public session : Session;
}