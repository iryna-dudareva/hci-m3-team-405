import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../../components/ui/Card";

export default function Profile() {
  return (
    <SafeAreaView style={{flex: 1, paddingHorizontal: 20, paddingTop: 10, backgroundColor: "#F6F7FB",}}>
      <Text style={{ fontSize: 28, fontWeight: "700" }}>
        Profile
      </Text>

      <Card>
        <Text style={{ fontSize: 18 }}>Tristan</Text>
        <Text style={{ color: "gray" }}>Informatik Student</Text>
      </Card>

      <Card>
        <Text>🔥 Streak: 5 days</Text>
        <Text>⭐ Matches: 12</Text>
      </Card>
    </SafeAreaView>
  );
}