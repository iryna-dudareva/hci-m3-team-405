import { View, Text, StyleSheet } from "react-native";
import { StudyEvent } from "@/types/study";
import { COLORS } from "@/constants/theme";

export default function StudyEventCard({ event }: { event: StudyEvent }) {

    const dateObj = new Date(event.timestamp);

    const formattedDate = dateObj.toLocaleDateString("en-GB", {
        weekday: "short",
        day: "2-digit",
        month: "short",
    });

    const formattedTime = dateObj.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
    });
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{event.title}</Text>
            <Text style={styles.text} >
                {event.subject} • {formattedDate} • {formattedTime}
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