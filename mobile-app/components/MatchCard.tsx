import { COLORS, SHADOWS } from "@/constants/theme";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const { width, height } = Dimensions.get("window");

type User = {
  id: number;
  name: string;
  subject: string;
  bio: string;
  image: string;
};

export default function MatchCard({ user }: { user: User }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: user.image }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.name}>{user.name}</Text>

        <Text style={styles.subject}>
          {user.subject}
        </Text>

        <Text style={styles.bio}>
          {user.bio}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: width * 0.86,
    height: height * 0.72,

    backgroundColor: COLORS.card,
    borderRadius: 32,

    overflow: "hidden",

    alignSelf: "center",

    ...SHADOWS.card,
  },

  image: {
    width: "100%",
    height: "72%",
  },

  content: {
    padding: 22,
  },

  name: {
    fontSize: 28,
    fontWeight: "700",
    color: COLORS.text,
    marginBottom: 6,
  },

  subject: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: "600",
    marginBottom: 10,
  },

  bio: {
    color: COLORS.subtext,
    lineHeight: 22,
    fontSize: 15,
  },
});