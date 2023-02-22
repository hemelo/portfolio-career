import { Period } from "./period";

export type School = {
    course: string;
    school: string;
    done?: string[];
} & Period;