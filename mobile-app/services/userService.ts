import { mockUsers } from "@/data/mockUsers";

export const getUsers = async () => {
    return mockUsers; //to be replaced with return await axios.get ("/users"); (mongodb backend)
};