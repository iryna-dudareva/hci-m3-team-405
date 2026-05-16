export interface User {
    id: string;
    firstName: string;
    lastName: string;
    subjects: string[];
    availability: string[];
    bio?: string;
}