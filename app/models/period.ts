export type Period = {
    begin: Date | string;
    end?: Date | string;
}

export const pipeDatesToHumanFormat = (data: Period) => {
    if (typeof data.begin !== 'string') { 
        data.begin = data.begin.toLocaleDateString();
    }

    if (data.end && typeof data.end !== 'string') { 
        data.end = data.end?.toLocaleString();
    }

    return data;
}