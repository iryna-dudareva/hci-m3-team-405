import { COLORS } from "@/constants/theme";
import { StyleSheet, Text, View } from "react-native";

export default function XPBar() {
  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.label}>Level 5</Text>
        <Text style={styles.label}>75%</Text>
      </View>

      <View style={styles.barBackground}>
        <View style={styles.barFill} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  label: {
    color: COLORS.text,
    fontWeight: "600",
  },

  barBackground: {
    height: 12,
    backgroundColor: "#E5E7EB",
    borderRadius: 999,
    overflow: "hidden",
  },

  barFill: {
    width: "75%",
    height: "100%",
    backgroundColor: COLORS.primary,
    borderRadius: 999,
  },
});