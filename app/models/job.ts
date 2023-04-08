import { Period } from './period';

export type Job = {
    company: string;
    done: string[];
    techs: string[];
    knowledge: string[];
} & Period;