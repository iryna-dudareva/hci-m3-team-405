import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

import Screen from "@/components/ui/Screen";
import { COLORS } from "@/constants/theme";

export default function Chat() {
  const params = useLocalSearchParams();
  const name = Array.isArray(params.name) ? params.name[0] : params.name;
  const chatTitle = name ? `Chat mit ${name}` : "Chat";

  const messages = [
    {
      id: 1,
      text: name ? `Hey ${name}, lernen wir morgen?` : "Hey, lernen wir morgen?",
      me: false,
    },
    { id: 2, text: "Ja passt!", me: true },
    { id: 3, text: "Welche Uhrzeit?", me: false },
  ];

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
        {chatTitle}
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