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


import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import Screen from "@/components/ui/Screen";

import { COLORS } from "@/constants/theme";
import { router } from "expo-router"
import { Ionicons } from "@expo/vector-icons";

/*
|--------------------------------------------------------------------------
| Message type
|--------------------------------------------------------------------------
| Defines the structure of a single chat message.
|--------------------------------------------------------------------------
*/
type Message = {
    id: number,
    text: string,
    me: boolean
};

export default function Chat() {
/*
|--------------------------------------------------------------------------
| Bottom tab spacing
|--------------------------------------------------------------------------
| Used to prevent the input area from overlapping
| with the bottom navigation bar.
|--------------------------------------------------------------------------
 */
  const [message, setMessage] = useState("");

/*
|--------------------------------------------------------------------------
| Bottom tab spacing
|--------------------------------------------------------------------------
| Used to prevent the input area from overlapping
| with the bottom navigation bar.
|--------------------------------------------------------------------------
*/
  const tabBarHeight = useBottomTabBarHeight();


/*
|--------------------------------------------------------------------------
| Mock chat data
|--------------------------------------------------------------------------
| Simulates a conversation before backend integration.
|--------------------------------------------------------------------------
*/
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hey, lernen wir morgen?", me: false },
    { id: 2, text: "Ja passt!", me: true },
    { id: 3, text: "Welche Uhrzeit?", me: false },
  ]);

/*
|--------------------------------------------------------------------------
| Mock automated replies
|--------------------------------------------------------------------------
| Temporary simulated bot responses used to imitate
| an active chat conversation.
|--------------------------------------------------------------------------
*/
  const botReplies = [
    "Alright",
    "For sure",
    "If you want, yes",
    "Sounds good",
    "Ja passt",
    "Cool",
  ];

/*
|--------------------------------------------------------------------------
| Delete message
|--------------------------------------------------------------------------
| Triggered when the user long presses a message bubble.
| Opens a confirmation alert before removing the message.
|--------------------------------------------------------------------------
*/
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

/*
|--------------------------------------------------------------------------
| Generate random bot reply
|--------------------------------------------------------------------------
| Returns a random message from the botReplies array.
|--------------------------------------------------------------------------
*/
  const getRandomReply = () => {
    return botReplies[Math.floor(Math.random() * botReplies.length)];
  };

/*
|--------------------------------------------------------------------------
| Send message
|--------------------------------------------------------------------------
| Adds the user's message to the chat history
| and simulates an automated reply after a short delay.
|--------------------------------------------------------------------------
*/
  const sendMessage = () => {

      /* Prevent sending empty messages */
    if (!message.trim()) return;

      /* Create new user message */
    const newMsg = {
      id: Date.now(),
      text: message,
      me: true,
    };

      /* Add user message to chat */
    setMessages((prev) => [...prev, newMsg]);

      /* Clear input field */
    setMessage("");

      /*
        Simulated delayed reply
        to imitate real-time conversation.
      */
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
      /*
        |--------------------------------------------------------------------------
        | KeyboardAvoidingView
        |--------------------------------------------------------------------------
        | Prevents the keyboard from covering the message input field.
        |--------------------------------------------------------------------------
       */
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Screen style={{ flex: 1 }}>

          {/* -------------------------------------------------------------- */}
          {/* Header Section                                                 */}
          {/* -------------------------------------------------------------- */}
        <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 20,
            }}
          >

            {/* Back navigation button */}
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                padding: 6,
                marginRight: 10,
              }}
            >
              <Ionicons name="chevron-back" size={28} color={COLORS.text} />
            </TouchableOpacity>

            {/* Screen title */}
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

          {/* -------------------------------------------------------------- */}
          {/* Messages List                                                  */}
          {/* -------------------------------------------------------------- */}
        <FlatList
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 0 }}
          data={messages}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity

                /* Delete message on long press */
              onLongPress={() => deleteMessage(item.id)}

              activeOpacity={0.7}
              style={{

                  /*
                  Align own messages right
                  and received messages left.
                  */
                alignSelf: item.me ? "flex-end" : "flex-start",

                  /*
                  Different colors for
                  sent vs received messages.
                  */
                backgroundColor: item.me ? COLORS.primary : COLORS.card,

                padding: 16,
                borderRadius: 20,
                marginBottom: 14,
                maxWidth: "80%",
              }}
            >

                {/* Message text */}
              <Text style={{ color: COLORS.text }}>
                {item.text}
              </Text>
            </TouchableOpacity>
          )}
        />

          {/* -------------------------------------------------------------- */}
          {/* Message Input Section                                          */}
          {/* -------------------------------------------------------------- */}
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            paddingVertical: 10,
            paddingBottom: tabBarHeight - 10
          }}
        >

            {/* Text input */}
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


            {/* Send button */}
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