import { View } from "react-native";

export default function Card({ children }: any) {
  return (
    <View
      style={{
        backgroundColor: "#FFFFFF",
        padding: 18,
        borderRadius: 20,

        borderWidth: 1,
        borderColor: "#ECECEC",

        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,

        marginBottom: 14,
      }}
    >
      {children}
    </View>
  );
}