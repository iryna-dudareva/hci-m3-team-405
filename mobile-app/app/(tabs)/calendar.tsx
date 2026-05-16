import { Text, View } from "react-native";

import Screen from "@/components/ui/Screen";
import { COLORS } from "@/constants/theme";

export default function Calendar() {
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
        Study Plan
      </Text>

      <View
        style={{
          backgroundColor: COLORS.card,
          padding: 22,
          borderRadius: 24,
          marginBottom: 18,
        }}
      >
        <Text
          style={{
            color: COLORS.text,
            fontSize: 18,
            fontWeight: "600",
          }}
        >
          📚 Algorithms with Anna
        </Text>

        <Text
          style={{
            color: COLORS.subtext,
            marginTop: 8,
          }}
        >
          Monday • 14:00
        </Text>
      </View>

      <View
        style={{
          backgroundColor: COLORS.card,
          padding: 22,
          borderRadius: 24,
        }}
      >
        <Text
          style={{
            color: COLORS.text,
            fontSize: 18,
            fontWeight: "600",
          }}
        >
          🧠 Database Exam Prep
        </Text>

        <Text
          style={{
            color: COLORS.subtext,
            marginTop: 8,
          }}
        >
          Wednesday • 10:00
        </Text>
      </View>
    </Screen>
  );
}