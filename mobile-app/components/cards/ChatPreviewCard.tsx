import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import { router } from 'expo-router';

import { COLORS, SHADOWS } from '@/constants/theme';

type Props = {
  name: string;
  message: string;
};

export default function ChatPreviewCard({
  name,
  message,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => router.push('/chat')}
    >
      <Text style={styles.name}>
        {name}
      </Text>

      <Text style={styles.message}>
        {message}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 22,
    padding: 18,
    marginBottom: 14,

    ...SHADOWS.card,
  },

  name: {
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 6,
    fontSize: 16,
  },

  message: {
    color: COLORS.subtext,
    lineHeight: 20,
  },
});

