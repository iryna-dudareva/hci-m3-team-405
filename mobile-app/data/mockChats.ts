import { Chat } from "@/types/chat";

//Mock-Data generiert mithilfe von Chatgpt, siehe Prompt in mobile-app/data/mockUser.ts


export const mockChats: Chat[] = [
  {
    id: "chat1",
    participants: ["1", "2"],
    messages: [
      {
        id: "m1",
        senderId: "1",
        text: "Hey, willst du für die Prüfung lernen?",
        timestamp: "2026-05-10T10:00:00Z",
      },
      {
        id: "m2",
        senderId: "2",
        text: "Ja, gerne! Wann hast du Zeit?",
        timestamp: "2026-05-10T10:05:00Z",
      },
    ],
  },
  {
    id: "chat2",
    participants: ["3", "4"],
    messages: [
      {
        id: "m3",
        senderId: "3",
        text: "Hast du SQL Aufgaben zum Üben?",
        timestamp: "2026-05-11T12:00:00Z",
      },
    ],
  },
  {
    id: "chat3",
    participants: ["1", "5"],
    messages: [
      {
        id: "m4",
        senderId: "5",
        text: "Ich kann dir bei UI helfen!",
        timestamp: "2026-05-12T09:00:00Z",
      },
      {
        id: "m5",
        senderId: "1",
        text: "Perfekt, danke!",
        timestamp: "2026-05-12T09:10:00Z",
      },
    ],
  },
  {
    id: "chat4",
    participants: ["2", "4"],
    messages: [
      {
        id: "m6",
        senderId: "4",
        text: "Lass uns Datenbanken wiederholen.",
        timestamp: "2026-05-13T14:00:00Z",
      },
    ],
  },
  {
    id: "chat5",
    participants: ["2", "3"],
    messages: [
      {
        id: "m7",
        senderId: "3",
        text: "TypeScript ist eigentlich nicht so schwer.",
        timestamp: "2026-05-14T08:00:00Z",
      },
    ],
  },
];