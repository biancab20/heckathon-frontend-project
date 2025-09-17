export interface IMemberData {
    id: number;
    username: string;
}

export interface IBookData {
    id: number;
    title: string;
    author: string;
    description?: string;
    image?: string;
    status?: "read" | "reading" | "suggested" | string;
    suggested_by?: IMemberData;
}
