import { IAdvisor } from '../advisor/advisor';

export interface IProfile{
    id:number;
    name:string;
    advisors: IAdvisor[];
    email:string;
    addresses: IAddress[];
    phones: IPhone[];
}