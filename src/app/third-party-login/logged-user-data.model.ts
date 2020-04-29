export class LoggedUserData{
    public name: string;
    public imagePath: string;
    public emailID: string;
    public loggedIn: boolean;
     
    constructor(name: string, imagePath: string, emailID: string, loggedIn: boolean){
        this.name = name;
        this.imagePath = imagePath;
        this.emailID = emailID;
        this.loggedIn=loggedIn;
    }
}