import { Period } from './period';

export type Job = {
    company: string;
    done: string[];
    techs: string[];
    knowledges: string[];
} & Period;