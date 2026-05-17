import { COLORS, SHADOWS } from "@/constants/theme";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";

const { width, height } = Dimensions.get("window");

type User = {
  id: number;
  name: string;
  subject: string;
  bio: string;
  image: string;
};

export default function MatchCard({ user }: { user: User }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <View style={styles.card}>
      <Image source={{ uri: user.image }} style={styles.image} />
      <LinearGradient colors={["transparent", "rgba(0,0,0,0.75)"]} style={styles.gradient} />

      <Pressable onPress={() => setExpanded(!expanded)}>
        <BlurView intensity={55} tint="light" style={styles.content}>
          <Text style={styles.name}>{user.name}</Text>

          <Text style={styles.subject}>
            {user.subject}
          </Text>

          <Text style={styles.bio}>
            {user.bio}
          </Text>

          {expanded && (
            <View style={styles.extraContent}>
              <Text style={styles.extraText}>
                📚 Favorite Subject: Algorithms
              </Text>

              <Text style={styles.extraText}>
                ⏰ Usually studies in the evening
              </Text>

              <Text style={styles.extraText}>
                🎓 3rd Semester
              </Text>

              <Text style={styles.extraText}>
                ☕ Loves coffee study sessions
              </Text>
            </View>
          )}

          <Text style={styles.tapHint}>
            {expanded ? "Tap to close" : "Tap for more"}
          </Text>
        </BlurView>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "92%",
    height: "82%",

    backgroundColor: COLORS.card,
    borderRadius: 32,

    overflow: "hidden",

    alignSelf: "center",

    ...SHADOWS.card,
  },

  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },

  content: {
    position: "absolute",
    bottom: 34,
    left: 18,
    right: 18,
    paddingVertical: 22,
    paddingHorizontal: 20,
    borderRadius: 24,
    overflow: "hidden",
    backgroundColor: "rgba(255,255,255,0.12)",
  },

  name: {
    fontSize: 28,
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: 6,
  },

  subject: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "600",
    marginBottom: 10,
  },

  bio: {
    color: "rgba(255,255,255,0.9)",
    lineHeight: 22,
    fontSize: 15,
  },

  gradient: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "65%",
  },

  extraContent: {
    marginTop: 14,
  },

  extraText: {
    fontSize: 14,
    color: "rgba(255,255,255,0.9)",
    marginBottom: 6,
    lineHeight: 20,
  },

  tapHint: {
    marginTop: 14,
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 14,
  },
});