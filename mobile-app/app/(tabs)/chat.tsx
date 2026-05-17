import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Keyboard
} from "react-native";

import Screen from "@/components/ui/Screen";
import { COLORS } from "@/constants/theme";

export default function Chat() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    { id: 1, text: "Hey, lernen wir morgen?", me: false },
    { id: 2, text: "Ja passt!", me: true },
    { id: 3, text: "Welche Uhrzeit?", me: false },
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    setMessages([
      ...messages,
      {
        id: Date.now(),
        text: message,
        me: true,
      },
    ]);

    setMessage("");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Screen style={{ flex: 1 }}>
        
        <Text
          style={{
            color: COLORS.text,
            fontSize: 34,
            fontWeight: "700",
            marginBottom: 20,
          }}
        >
          Chat
        </Text>

        <FlatList
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 10 }}
          data={messages}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                alignSelf: item.me ? "flex-end" : "flex-start",
                backgroundColor: item.me
                  ? COLORS.primary
                  : COLORS.card,
                padding: 16,
                borderRadius: 20,
                marginBottom: 14,
                maxWidth: "80%",
              }}
            >
              <Text style={{ color: COLORS.text }}>
                {item.text}
              </Text>
            </View>
          )}
        />
  
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            paddingVertical: 10,
          }}
        >
          <TextInput
            value={message}
            onChangeText={setMessage}
            placeholder="Type message..."
            placeholderTextColor="#999"
            style={{
              flex: 1,
              backgroundColor: COLORS.card,
              color: COLORS.text,
              padding: 14,
              borderRadius: 16,
              marginBottom: 35
            }}
          />
  
          <TouchableOpacity
            onPress={sendMessage}
            style={{
              backgroundColor: COLORS.primary,
              justifyContent: "center",
              paddingHorizontal: 20,
              borderRadius: 16,
              marginBottom: 40
            }}
          >
            <Text style={{ color: "white" }}>Send</Text>
          </TouchableOpacity>
        </View>
  
      </Screen>
    </KeyboardAvoidingView>
  );
}