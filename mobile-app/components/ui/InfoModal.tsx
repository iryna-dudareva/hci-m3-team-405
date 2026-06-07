import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS } from "@/constants/theme";


export default function InfoModal({
    visible,
    title,
    content,
    onClose,
}: {
        visible: boolean;
        title: string;
        content: string;
        onClose: () => void;
    }) {
    return (
        <Modal transparent visible={visible} animationType="fade">
            <View style={styles.overlay}>
                <View style={styles.modal}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.content}>{content}</Text>

                    <Pressable style={styles.button} onPress={onClose}>
                        <Text style={styles.bText}> Got it!</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}


const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
        padding: 24,
    },

    modal: {
        borderRadius: 20,
        backgroundColor: COLORS.card,
        padding: 20,
    },
    title: {
        color: COLORS.text,
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 12,
    },
    content: {
        color: COLORS.subtext,
        lineHeight: 22,

    },
    button: {
        marginTop: 20,
        backgroundColor: COLORS.primary,
        padding: 12,
        borderRadius: 12,
    },
    bText: {
        color: "white",
        textAlign: "center",
        fontWeight: "700",
    },
});