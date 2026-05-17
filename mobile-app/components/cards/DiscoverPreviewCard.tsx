import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { router } from 'expo-router';

import { COLORS, SHADOWS } from '@/constants/theme';
import { getMatchCount } from "@/services/userService";

export default function DiscoverPreviewCard() {
  const matchCount = getMatchCount();

  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        New Study Matches
      </Text>

      <Text style={styles.subtitle}>
        {matchCount} students match your interests
        and study goals.
      </Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => router.push('/match')}
      >
        <Text style={styles.buttonText}>
          Explore Matches
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    padding: 24,
    marginBottom: 28,

    ...SHADOWS.card,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 12,
  },

  subtitle: {
    color: '#E0E7FF',
    lineHeight: 24,
    marginBottom: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    borderRadius: 18,
    alignItems: 'center',
  },

  buttonText: {
    color: COLORS.primary,
    fontWeight: '700',
    fontSize: 16,
  },
});
