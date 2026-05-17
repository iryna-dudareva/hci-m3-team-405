import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function DiscoverPreviewCard() {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>New Study Matches</Text>

            <Text style={styles.subtitle}>
                12 students match your interests and study goals.
            </Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Explore Matches</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#4F46E5',
        borderRadius: 28,
        padding: 24,
        marginBottom: 24,
    },

    title: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 10,
    },

    subtitle: {
        color: '#E0E7FF',
        lineHeight: 22,
        marginBottom: 22,
        fontSize: 15,
    },

    button: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 14,
        borderRadius: 18,
        alignItems: 'center',
    },

    buttonText: {
        color: '#4F46E5',
        fontWeight: '700',
        fontSize: 16,
    },
});