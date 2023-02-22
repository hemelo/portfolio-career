export type Whoami = {
    name: string;
    years: number;
    current_role: string;
    pronouns: string;
    codename: string;
    email: string;
    location: {
        country: string;
        city: string;
    },
    social: {
        linkedin: string,
        dev: string,
        discord?: string,
        twitter?: string,
        tiktok?: string,
        instagram?: string,
        youtube?: string,
    }
}