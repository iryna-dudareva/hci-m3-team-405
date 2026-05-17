import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Alert
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import Screen from "@/components/ui/Screen";
import { COLORS } from "@/constants/theme";
import { router } from "expo-router"
import { Ionicons } from "@expo/vector-icons";

export default function Chat() {
  const [message, setMessage] = useState("");
 
  const tabBarHeight = useBottomTabBarHeight();
  type Message = {
    id: number,
    text: string,
    me: boolean
  };


  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hey, lernen wir morgen?", me: false },
    { id: 2, text: "Ja passt!", me: true },
    { id: 3, text: "Welche Uhrzeit?", me: false },
  ]);
  
  const botReplies = [
    "Alright",
    "For sure",
    "If you want, yes",
    "Sounds good",
    "Ja passt",
    "Cool",
  ];

  
  const deleteMessage = (id: number) => {
    Alert.alert("Delete message?", "", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          setMessages((prev) => prev.filter((m) => m.id !== id));
        },
      },
    ]);
  };
    
  const getRandomReply = () => {
    return botReplies[Math.floor(Math.random() * botReplies.length)];
  };
  const sendMessage = () => {
    if (!message.trim()) return;

    const newMsg = {
      id: Date.now(),
      text: message,
      me: true,
    };
    setMessages((prev) => [...prev, newMsg]);
    setMessage("");

    setTimeout(() =>{
      const reply = {
        id: Date.now() + 1,
        text: getRandomReply(),
        me: false,
      };
      setMessages((prev) => [...prev, reply]);
    }, 800)
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Screen style={{ flex: 1 }}>
        
        <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                padding: 6,
                marginRight: 10,
              }}
            >
              <Ionicons name="chevron-back" size={28} color={COLORS.text} />
            </TouchableOpacity>

            <Text
              style={{
                color: COLORS.text,
                fontSize: 34,
                fontWeight: "700",
              }}
            >
              Chat
            </Text>
          </View>

        <FlatList
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 0 }}
          data={messages}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onLongPress={() => deleteMessage(item.id)}
              activeOpacity={0.7}
              style={{
                alignSelf: item.me ? "flex-end" : "flex-start",
                backgroundColor: item.me ? COLORS.primary : COLORS.card,
                padding: 16,
                borderRadius: 20,
                marginBottom: 14,
                maxWidth: "80%",
              }}
            >
              <Text style={{ color: COLORS.text }}>
                {item.text}
              </Text>
            </TouchableOpacity>
          )}
        />
  
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            paddingVertical: 10,
            paddingBottom: tabBarHeight - 10
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
             
            }}
          />
          
  
          <TouchableOpacity
            onPress={sendMessage}
            style={{
              backgroundColor: COLORS.primary,
              justifyContent: "center",
              paddingHorizontal: 20,
              borderRadius: 16,
            }}
          >
            <Text style={{ color: "white" }}>Send</Text>
          </TouchableOpacity>
        </View>
  
      </Screen>
    </KeyboardAvoidingView>
  );
}