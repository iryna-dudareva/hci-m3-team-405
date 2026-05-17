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
  age: number;
  location: string;
  studyStyle: string;
  availability: string; 
  languages: string; 
};

export default function MatchCard({ user }: { user: User }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.card}>
      <Image source={{ uri: user.image }} style={styles.image} />

      <LinearGradient
        colors={[
          "transparent",
          "rgba(0,0,0,0.15)",
          "rgba(0,0,0,0.88)",
        ]}
        style={styles.gradient}
      />

      {/* CONTENT */}
      <Pressable
        style={StyleSheet.absoluteFillObject}
        onPress={() => setExpanded(!expanded)}
      >
        <BlurView intensity={55} tint="dark" style={styles.content}>
          <View style={styles.headerRow}>
            <View style={{ flex: 1 }}>
              <Text numberOfLines={1} style={styles.name}>
                {user.name}, {user.age}
              </Text>

              <Text style={styles.subject}>
                {user.subject}
              </Text>
            </View>

            <View style={styles.locationPill}>
              <Text style={styles.locationText}>
                {user.location}
              </Text>
            </View>
          </View>
          <Text
            style={styles.bio}
            numberOfLines={expanded ? 6 : 2}
          >
            {user.bio}
          </Text>

          {expanded && (
            <View style={styles.extraContent}>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>📘 Study Style</Text>
                <Text style={styles.extraText}>
                  {user.studyStyle}
                </Text>
              </View>

              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>⏰ Availability</Text>
                <Text style={styles.extraText}>
                  {user.availability}
                </Text>
              </View>

              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>🌍 Languages</Text>
                <Text style={styles.extraText}>
                  {user.languages}
                </Text>
              </View>
            </View>
          )}

          <View style={styles.buttonRow}>
            <View style={styles.expandButton}>
              <Text style={styles.tapHint}>
                {expanded ? "Show less" : "More about me"}
              </Text>
            </View>
          </View>
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
    borderRadius: 34,
    overflow: "hidden",
    alignSelf: "center",
    ...SHADOWS.card,
  },

  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },

  gradient: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "72%",
  },

  content: {
    position: "absolute",
    left: 18,
    right: 18,
    bottom: 22,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 28,
    overflow: "hidden",
    backgroundColor: "rgba(255,255,255,0.10)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },

  name: {
    fontSize: 30,
    fontWeight: "800",
    color: "#ffffff",
    letterSpacing: -0.7,
  },

  subject: {
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(255,255,255,0.92)",
    marginTop: 4,
  },

  locationPill: {
    backgroundColor: "rgba(255,255,255,0.14)",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 22,
    marginLeft: 10,
  },

  locationText: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "700",
  },

  bio: {
    color: "rgba(255,255,255,0.96)",
    fontSize: 15,
    lineHeight: 24,
  },

  extraContent: {
    marginTop: 18,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.12)",
  },

  infoRow: {
    marginBottom: 14,
  },

  infoLabel: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 14,
    marginBottom: 4,
  },

  extraText: {
    color: "rgba(255,255,255,0.88)",
    fontSize: 14,
    lineHeight: 21,
  },

  buttonRow: {
    marginTop: 18,
    alignItems: "center",
  },

  expandButton: {
    backgroundColor: "rgba(255,255,255,0.14)",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
  },

  tapHint: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 14,
  },
});