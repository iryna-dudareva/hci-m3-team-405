import { View, Text, StyleSheet } from "react-native";
import { StudyEvent } from "@/types/study";
import { COLORS } from "@/constants/theme";

export default function StudyEventCard({ event }: { event: StudyEvent }) {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{event.title}</Text>
            <Text style={styles.text} >
                {event.subject} • {event.date} • {event.time}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.card,
        padding: 18,
        borderRadius: 20,
        marginBottom: 12,
    },
    title: {
        color: COLORS.text,
        fontSize: 16,
        fontWeight: "700",
    },
    text: {
        color: COLORS.subtext,
        marginTop: 6,
    },
});