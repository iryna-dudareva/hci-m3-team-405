import { users } from "@/data/users";
import { User } from "@/types/user";

export const getUsers =  (): User[] => {
    return users;
};

export const getMatchCount = (): number => {
    return users.length;
};