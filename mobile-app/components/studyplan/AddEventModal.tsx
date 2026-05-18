import { useState } from "react";
import { Modal, View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { COLORS } from "@/constants/theme";
import { StudyEvent } from "@/types/study";

export default function AddEventModal({
    visible, onClose, onAdd,
}: {
    visible: boolean;
    onClose: () => void;
    onAdd: (event: StudyEvent) => void;
    }) {
    const [title, setTitle] = useState("");
    const [subject, setSubject] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleAdd = () => {
        if (!title || !subject || !date || !time) return;

        onAdd({
            id: Date.now(),
            title,
            subject,
            date,
            time,
        });

        setTitle("");
        setSubject("");
        setDate("");
        setTime("");


        onClose();
    };

    return (
        <Modal visible={visible} animationType="slide" transparent>
            <View style={styles.overlay}>
                <View style={styles.modal}>
                    <Text style={styles.title}> New Study Event</Text>

                    <TextInput placeholder="Title"  placeholderTextColor={COLORS.subtext} value={title} onChangeText={setTitle} style={styles.input} />
                    <TextInput placeholder="Subject"  placeholderTextColor={COLORS.subtext} value={subject} onChangeText={setSubject} style={styles.input} />
                    <TextInput placeholder="Date (YYYY-MM-DD)"  placeholderTextColor={COLORS.subtext} value={date} onChangeText={setDate} style={styles.input} />
                    <TextInput placeholder="Time (HH:MM)"  placeholderTextColor={COLORS.subtext} value={time} onChangeText={setTime} style={styles.input} />
                    
                    <Pressable onPress={handleAdd} style={styles.button}>
                        <Text style={styles.buttonText}>AddEvent</Text>
                    </Pressable>


                    <Pressable onPress={onClose}>
                        <Text style={styles.cancel}>Cancel</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        padding: 20,
    },
    modal: {
        backgroundColor: COLORS.card,
        borderRadius: 20,
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 12,
        color: COLORS.text
    },
    input: {
        borderWidth: 1,
        borderColor: COLORS.border,
        padding: 10,
        borderRadius: 12,
        marginBottom: 10,
        color: COLORS.text,
        backgroundColor: COLORS.background,
    },
    button: {
        backgroundColor: COLORS.primary,
        padding: 12,
        borderRadius: 12,
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "700",


    },
    cancel: {
        textAlign: "center",
        marginTop: 10,
        color: COLORS.subtext,
    },
});
