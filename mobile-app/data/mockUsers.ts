import { User } from "@/types/user";

//Mock-Data generiert mithilfe von Chatgpt
/*
Prompt:  based on these types: export interface User {
    id: string;
    firstName: string;
    lastName: string;
    subjects: string[];
    availability: string[];
    bio?: string;
},  export interface Message{
    id: string;
    senderId: string;
    text: string;
    timestamp: string;
}


export interface Chat {
    id: string;
    participants: string[];
    messages: Message[];
}, export interface Calendar{
    id: string;
    title: string;
    date: string;
    type: 'stusy' | 'meeting' | 'exam' | 'custom';
    location?: string;
    desc?: string
} ...create mockData  for each type (interface) accordingly, where User is type for mockUser.ts, Chat + Message mochChats.ts and Calendar mockCalender.ts. Min. 5, max. 15 entries*/
 

export const mockUsers: User[] = [
  {
    id: "1",
    firstName: "Anna",
    lastName: "Müller",
    subjects: ["React", "UX Design"],
    availability: ["Monday", "Wednesday"],
    bio: "Ich helfe gerne bei Frontend und UI Themen.",
  },
  {
    id: "2",
    firstName: "Max",
    lastName: "Schmidt",
    subjects: ["Mathematik", "Statistik"],
    availability: ["Tuesday", "Thursday"],
    bio: "Mathe Buddy für Prüfungen.",
  },
  {
    id: "3",
    firstName: "Lea",
    lastName: "Klein",
    subjects: ["JavaScript", "TypeScript"],
    availability: ["Friday"],
    bio: "Lerne gern gemeinsam und erkläre Basics.",
  },
  {
    id: "4",
    firstName: "Jonas",
    lastName: "Weber",
    subjects: ["Databases", "SQL"],
    availability: ["Monday", "Friday"],
    bio: "SQL und Datenbanken sind mein Ding.",
  },
  {
    id: "5",
    firstName: "Sara",
    lastName: "Hoffmann",
    subjects: ["UI Design", "Figma"],
    availability: ["Wednesday", "Thursday"],
    bio: "Design + UX Unterstützung.",
  },
];