import { Text, View } from "react-native";

import Screen from "@/components/ui/Screen";
import { COLORS } from "@/constants/theme";

export default function Profile() {
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
        Profile
      </Text>

      <View
        style={{
          backgroundColor: COLORS.card,
          padding: 24,
          borderRadius: 28,
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            color: COLORS.text,
            fontSize: 22,
            fontWeight: "700",
          }}
        >
          Tristan
        </Text>

        <Text
          style={{
            color: COLORS.subtext,
            marginTop: 8,
          }}
        >
          Computer Science Student
        </Text>
      </View>

      <View
        style={{
          backgroundColor: COLORS.card,
          padding: 24,
          borderRadius: 28,
        }}
      >
        <Text
          style={{
            color: COLORS.text,
            marginBottom: 10,
          }}
        >
          🔥 5 Day Streak
        </Text>

        <Text
          style={{
            color: COLORS.text,
          }}
        >
          ⭐ 12 Study Matches
        </Text>
      </View>
    </Screen>
  );
}