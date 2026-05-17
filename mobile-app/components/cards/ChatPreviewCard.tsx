import { View, Text, StyleSheet } from 'react-native';

export default function ChatPreviewCard() {
    return (
        <View style={styles.card}>
            <Text style={styles.name}>Anna Keller</Text>

            <Text style={styles.message}>
                Ready for algorithms later?
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 22,
        padding: 18,
        marginBottom: 14,
    },

    name: {
        fontWeight: '700',
        color: '#0F172A',
        marginBottom: 6,
        fontSize: 16,
    },

    message: {
        color: '#64748B',
        lineHeight: 20,
    },
});