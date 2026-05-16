import { Calendar } from "@/types/calendar";

//Mock-Data generiert mithilfe von Chatgpt, siehe Prompt in mobile-app/data/mockUser.ts


export const mockCalendar: Calendar[] = [
  {
    id: "cal1",
    title: "React Vorlesung",
    date: "2026-05-20",
    type: "study",
    location: "Uni Berlin",
    desc: "Hooks und State Management",
  },
  {
    id: "cal2",
    title: "Mathe Prüfung",
    date: "2026-05-22",
    type: "exam",
    location: "Hörsaal A",
    desc: "Lineare Algebra",
  },
  {
    id: "cal3",
    title: "Lernsession mit Anna",
    date: "2026-05-18",
    type: "meeting",
    desc: "Frontend Vorbereitung",
  },
  {
    id: "cal4",
    title: "Projekt Meeting",
    date: "2026-05-19",
    type: "meeting",
    location: "Zoom",
    desc: "M3 Planung",
  },
  {
    id: "cal5",
    title: "Eigene Lernzeit",
    date: "2026-05-21",
    type: "custom",
    desc: "TypeScript üben",
  },
];