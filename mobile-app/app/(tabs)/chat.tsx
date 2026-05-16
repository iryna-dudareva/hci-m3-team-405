import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const messages = [
  { id: 1, text: "Hey, lernen wir morgen?", me: false },
  { id: 2, text: "Ja passt!", me: true },
  { id: 3, text: "Welche Uhrzeit?", me: false },
];

export default function Chat() {
  return (
    <SafeAreaView style={{flex: 1, paddingHorizontal: 20, paddingTop: 10, backgroundColor: "#F6F7FB",}}>
      <Text style={{ fontSize: 24, fontWeight: "700" }}>
        Chat
      </Text>

      <View style={{ marginTop: 20 }}>
        {messages.map((m) => (
          <View
            key={m.id}
            style={{
              alignSelf: m.me ? "flex-end" : "flex-start",
              backgroundColor: m.me ? "#111" : "white",
              padding: 12,
              borderRadius: 16,
              marginBottom: 10,
              maxWidth: "80%",
            }}
          >
            <Text style={{ color: m.me ? "white" : "black" }}>
              {m.text}
            </Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}