import { IBaseSanity } from "./base";

export interface IProductSanity extends IBaseSanity {
    title: string;
    subTitle: string;
    price: number;
    description: string;
    subDescription: string;
}