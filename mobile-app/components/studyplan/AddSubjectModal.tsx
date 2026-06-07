import { Modal, View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { COLORS } from "@/constants/theme";

import { useState } from "react";



export default function AddSubjectModal({
    visible, onClose, onAdd,
}: {
    visible: boolean;
    onClose: () => void;
    onAdd: (subject: string) => void;
    }) {

    const [subject, setSubject] = useState("");


    const handleAdd = () => {
        if (!subject.trim()) return;

        onAdd(subject.trim());


        setSubject("");



        onClose();
    };

    return (
        <Modal visible={visible} animationType="slide" transparent>
            <View style={styles.overlay}>
                <View style={styles.modal}>
                    <Text style={styles.title}> New Subject</Text>

                    <TextInput placeholder="Subject Name"  placeholderTextColor={COLORS.subtext} value={subject} onChangeText={setSubject} style={styles.input} />

                    
                    <Pressable onPress={handleAdd} style={styles.button}>
                        <Text style={styles.buttonText}>Add Subject</Text>
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
