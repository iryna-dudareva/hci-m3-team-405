import { User } from "@/types/user";

//Mock-Data generiert mithilfe von Chatgpt
/*
Prompt:  based on these types: 
export interface User {
    id: string;
    name: string;
    subject: string;
    semester: string;
    image: string;
}


export interface Chat {
    id: string;
    participants: string[];
    messages: Message[];
}, 
export interface Calendar{
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
    name: "Sophia",
    subject: "Computer Science",
    semester: "4th Semester",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    id: "2",
    name: "Daniel",
    subject: "Data Science",
    semester: "2nd Semester",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    id: "3",
    name: "Emma",
    subject: "Physics",
    semester: "6th Semester",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
  },
  {
    id: "4",
    name: "Lukas",
    subject: "Mathematics",
    semester: "3rd Semester",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
  {
    id: "5",
    name: "Mia",
    subject: "UX Design",
    semester: "5th Semester",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  },
];