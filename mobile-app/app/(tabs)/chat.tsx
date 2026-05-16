import { Text, View } from "react-native";

import Screen from "@/components/ui/Screen";
import { COLORS } from "@/constants/theme";

const messages = [
  { id: 1, text: "Hey, lernen wir morgen?", me: false },
  { id: 2, text: "Ja passt!", me: true },
  { id: 3, text: "Welche Uhrzeit?", me: false },
];

export default function Chat() {
  return (
    <Screen>
      <Text
        style={{
          color: COLORS.text,
          fontSize: 34,
          fontWeight: "700",
          marginBottom: 30,
        }}
      >
        Chat
      </Text>

      <View>
        {messages.map((m) => (
          <View
            key={m.id}
            style={{
              alignSelf: m.me ? "flex-end" : "flex-start",
              backgroundColor: m.me
                ? COLORS.primary
                : COLORS.card,

              padding: 16,
              borderRadius: 20,
              marginBottom: 14,
              maxWidth: "80%",
            }}
          >
            <Text
              style={{
                color: COLORS.text,
                fontSize: 15,
              }}
            >
              {m.text}
            </Text>
          </View>
        ))}
      </View>
    </Screen>
  );
}