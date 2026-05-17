import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

import { COLORS } from "@/constants/theme";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarShowLabel: false,

        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          left: 20,
          right: 20,

          backgroundColor: "#181C24",

          borderRadius: 24,

          height: 75,

          borderTopWidth: 0,

          elevation: 0,

          shadowColor: "#000",
          shadowOpacity: 0.25,
          shadowRadius: 20,
        },

        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: "#7B8190",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="match"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="chat"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubbles" size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="calendar"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}