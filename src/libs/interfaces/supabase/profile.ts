import { ISupabaseBase } from "./base";

export interface ISupabaseUserProfile extends ISupabaseBase {
    address: string;
    country: string;
    city: string;
    district: string;
    subDistrict: string;
    profileUrl: string;
    postalCode: string;
}