import { Stheme } from "./sous-theme";
import { Responsable } from "../Utilisateur/utilisateur";

export class Formation{
    public idFormation : number;
    public codeFormation : string;
    public nom : string;
    public description : string;
    public nbreJrs : number;
    public respCat : Responsable;
    public stheme : Stheme;
}