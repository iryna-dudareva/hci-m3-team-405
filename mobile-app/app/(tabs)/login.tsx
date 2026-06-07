import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import { router } from 'expo-router';

import { COLORS } from '@/constants/theme';

export default function LoginScreen() {
    return (
        <View style={styles.container}>

            <View style={styles.logo}>
                <Text style={styles.logoText}>📚</Text>
            </View>

            <Text style={styles.title}>
                Study Buddy
            </Text>

            <Text style={styles.subtitle}>
                Find study partners, organize sessions
                and stay motivated together.
            </Text>

            <TouchableOpacity
                style={styles.loginButton}
                onPress={() => router.replace('/')}
            >
                <Text style={styles.loginText}>
                    Login
                </Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        justifyContent: 'center',
        paddingHorizontal: 30,
    },

    logo: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: COLORS.primary,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },

    logoText: {
        fontSize: 50,
    },

    title: {
        textAlign: 'center',
        fontSize: 38,
        fontWeight: '800',
        color: COLORS.text,
        marginBottom: 12,
    },

    subtitle: {
        textAlign: 'center',
        color: COLORS.subtext,
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 40,
    },

    loginButton: {
        backgroundColor: COLORS.primary,
        paddingVertical: 18,
        borderRadius: 20,
        alignItems: 'center',
    },

    loginText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '700',
    },
});