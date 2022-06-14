
export class Utilisateur{
    public idUtilisateur : number;
    public codeUser : string;
    public nom : string;
    public prenom : string;
    public email : string;
    public telephone : string;
    public societe : string;
    public dateNaiss : Date;
    public numeroSiret : string;
    public statut : string;
    public login : string;
    public password : string;
    public typeUser : TypeUSer;
}

export class Responsable extends Utilisateur{
    public fonction : String;
}

export class Apprenant extends Utilisateur{
    public dernierDiplome : String;
}

export class Formateur extends Utilisateur{
    public certifications : String
}

export class TypeUSer{
    public idType : number;
    public nom : string;
    public description : string;
}