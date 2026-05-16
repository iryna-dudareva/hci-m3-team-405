import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../../components/ui/Card";

export default function Calendar() {
  return (
    <SafeAreaView style={{flex: 1, paddingHorizontal: 20, paddingTop: 10, backgroundColor: "#F6F7FB",}}>
      <Text style={{ fontSize: 28, fontWeight: "700" }}>
        Study Plan
      </Text>

      <Card>
        <Text>📅 Monday</Text>
        <Text style={{ color: "gray" }}>
          Algorithms mit Anna (14:00)
        </Text>
      </Card>

      <Card>
        <Text>📅 Wednesday</Text>
        <Text style={{ color: "gray" }}>
          Database Exam Prep
        </Text>
      </Card>
    </SafeAreaView>
  );
}