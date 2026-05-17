import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import SessionCard from '@/components/cards/SessionCard';
import ChatPreviewCard from '@/components/cards/ChatPreviewCard';
import DiscoverPreviewCard from '@/components/cards/DiscoverPreviewCard';

export default function HomeScreen() {
    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.header}>
                <Text style={styles.greeting}>
                    Welcome back 👋
                </Text>

                <Text style={styles.subtitle}>
                    Organize your study sessions and connect with students.
                </Text>
            </View>

            <View style={styles.actionsContainer}>
                <TouchableOpacity style={styles.primaryAction}>
                    <Text style={styles.primaryActionText}>
                        Discover
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.secondaryAction}>
                    <Text style={styles.secondaryActionText}>
                        Create Session
                    </Text>
                </TouchableOpacity>
            </View>

            <DiscoverPreviewCard />

            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>
                    Upcoming Sessions
                </Text>
            </View>

            <SessionCard />
            <SessionCard />

            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>
                    Recent Chats
                </Text>
            </View>

            <ChatPreviewCard />
            <ChatPreviewCard />

            <View style={{ height: 120 }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F7FB',
        paddingHorizontal: 20,
    },

    header: {
        marginTop: 70,
        marginBottom: 30,
    },

    greeting: {
        fontSize: 36,
        fontWeight: '800',
        color: '#0F172A',
        marginBottom: 10,
    },

    subtitle: {
        color: '#64748B',
        fontSize: 17,
        lineHeight: 25,
    },

    actionsContainer: {
        flexDirection: 'row',
        gap: 14,
        marginBottom: 28,
    },

    primaryAction: {
        flex: 1,
        backgroundColor: '#4F46E5',
        paddingVertical: 18,
        borderRadius: 22,
        alignItems: 'center',
    },

    primaryActionText: {
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 16,
    },

    secondaryAction: {
        flex: 1,
        backgroundColor: '#E2E8F0',
        paddingVertical: 18,
        borderRadius: 22,
        alignItems: 'center',
    },

    secondaryActionText: {
        color: '#0F172A',
        fontWeight: '700',
        fontSize: 16,
    },

    sectionHeader: {
        marginBottom: 16,
    },

    sectionTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#0F172A',
    },
});