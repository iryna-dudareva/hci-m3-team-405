import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../../components/ui/Card";
import { users } from "../../data/mock";

export default function Home() {
  return (
    <SafeAreaView style={{flex: 1, paddingHorizontal: 20, paddingTop: 10, backgroundColor: "#F6F7FB",}}>
      <Text style={{ fontSize: 28, fontWeight: "700" }}>
        Your Buddies
      </Text>

      <Text style={{ color: "gray", marginBottom: 20 }}>
        Find people to study with
      </Text>

      {users.map((u) => (
        <Card key={u.id}>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>
            {u.name}
          </Text>

          <Text style={{ color: "gray" }}>
            {u.study}
          </Text>
        </Card>
      ))}
    </SafeAreaView>
  );
}