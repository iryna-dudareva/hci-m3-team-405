import { Pressable, Text } from "react-native";

export default function Button({ title, onPress }: any) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        backgroundColor: pressed ? "#333" : "#111",
        paddingVertical: 14,
        borderRadius: 14,
        alignItems: "center",
        marginTop: 14,
      })}
    >
      <Text
        style={{
          color: "white",
          fontWeight: "700",
          fontSize: 15,
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
}