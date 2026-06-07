import { View, Text, StyleSheet, Pressable } from "react-native";
import { StudyEvent } from "@/types/study";
import { COLORS } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";

export default function StudyEventCard({ event, onEdit }:
    {
        event: StudyEvent,
        onEdit: (event: StudyEvent) => void;
     }) {

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

            <View style={styles.row}>
                <Text style={styles.title}>{event.title}</Text>

                <Pressable onPress={() => onEdit(event)}>
                    <Ionicons name="pencil-outline" size={18} color={COLORS.subtext} />
                </Pressable>
            </View>
            
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
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
});