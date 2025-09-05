import { ISupabaseBase } from "./base";

export enum IAuthorizeModeType {
    SIGN_IN = "SIGN IN",
    SIGN_UP = "SIGN UP"
}

export interface ISupabaseUser extends ISupabaseBase {
   name: string;
   email: string;
   password: string;
   username: string;
   loginToken: string;
}

export interface ICustomAuthUserCredential {
    email: string;
    mode: IAuthorizeModeType;
    password: string;
    username?:string;
    name?:string;
    phone?: string;
}

export interface ICustomResponseAuthorize {
    email: string;
    name: string;
    username: string;
}