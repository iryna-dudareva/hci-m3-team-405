import { View, Text, StyleSheet } from 'react-native';

export default function SessionCard() {
    return (
        <View style={styles.card}>
            <Text style={styles.time}>Today • 16:00</Text>

            <Text style={styles.title}>
                Algorithms Study Session
            </Text>

            <Text style={styles.people}>
                4 participants
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 20,
        marginBottom: 14,
    },

    time: {
        color: '#4F46E5',
        fontWeight: '700',
        marginBottom: 8,
    },

    title: {
        fontSize: 18,
        fontWeight: '700',
        color: '#0F172A',
        marginBottom: 6,
    },

    people: {
        color: '#64748B',
    },
});