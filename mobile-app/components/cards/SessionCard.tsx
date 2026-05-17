import { View, Text, StyleSheet } from 'react-native';

import { COLORS, SHADOWS } from '@/constants/theme';

type Props = {
  title: string;
  time: string;
  participants: number;
};

export default function SessionCard({
  title,
  time,
  participants,
}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.time}>{time}</Text>

      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.people}>
        {participants} participants
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 24,
    padding: 20,
    marginBottom: 14,

    ...SHADOWS.card,
  },

  time: {
    color: COLORS.primary,
    fontWeight: '700',
    marginBottom: 8,
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 6,
  },

  people: {
    color: COLORS.subtext,
  },
});

