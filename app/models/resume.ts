import { Whoami } from './whoami';
import { School } from './school';
import { Job } from "./job";

export type Resume = {
    jobs: Job[], 
    schools: School[],
    skills: {
        core: string[],
        generic: string[],
    },
    whoami: Whoami
}