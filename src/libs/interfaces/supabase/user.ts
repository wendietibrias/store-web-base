import { ISupabaseBase } from "./base";

export interface ISupabaseUser extends ISupabaseBase {
   name: string;
   email: string;
   password: string;
   username: string;
   loginToken: string;
}

export interface ICustomAuthUserCredential {
    name: string;
    username: string;
    email: string;
}