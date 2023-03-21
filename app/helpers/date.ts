import {Period} from "@models";

export const pipeDatesToYearFormat = (data: Period) => {


    if (typeof data.begin === 'string') {
        data.begin = new Date(data.begin);
    }

    data.begin = data.begin.getFullYear().toString();

    if(!data.end) return data;

    if (typeof data.end === 'string') {
        data.end = new Date(data.end);
    }

    data.end = data.end.getFullYear().toString();

    return data;
}