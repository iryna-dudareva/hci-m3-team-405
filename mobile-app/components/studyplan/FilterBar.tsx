import { COLORS } from "@/constants/theme";
import { View, Pressable, Text, StyleSheet } from "react-native";

export default function FilterBar({
    subjects,
    active,
    setActive,
    onAddSubject,
}: {
        subjects: string[];
        active: string;
        setActive: (val: string) => void;
        onAddSubject: () => void;
    }) {
   

    return (
        <View style={styles.row}>
            {subjects.map((s) => {
                const isActive = active === s;

                return(
                <Pressable key = { s } onPress = {() => setActive(s)} style={[styles.button, isActive && styles.activebutton]}>
            <Text style={[styles.text, isActive && styles.activeText]}>{s}</Text>
        </Pressable>
    );
            })}
            <Pressable onPress={onAddSubject} style={styles.addButton}>
                <Text style={styles.addText}>+</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        marginBottom: 12,
        gap: 8,
        flexWrap: "wrap",
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: COLORS.card,
        borderColor: COLORS.border,
        borderWidth: 1,
        borderRadius: 12,
    },
    activebutton: {
        backgroundColor: COLORS.primary,
        borderColor: COLORS.primary,
    },
    text: {
        fontWeight: "600",
        color: COLORS.subtext,
        fontSize: 13,
    },
    activeText: {
        color: "#fff"
    },
    addButton: {
        width: 36,
        height: 36,
        borderRadius: 12,
        backgroundColor: COLORS.primary,
        alignItems: "center",
        justifyContent: "center",
    },
    addText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "700",
        marginTop: -2,
    },
});