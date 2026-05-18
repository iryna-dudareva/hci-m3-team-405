import { View, Text, StyleSheet } from 'react-native';

import { COLORS, SHADOWS } from '@/constants/theme';

/*
|--------------------------------------------------------------------------
| Component Props
|--------------------------------------------------------------------------
| title        -> session title / topic
| time         -> scheduled session time
| participants -> number of participants joining the session
|--------------------------------------------------------------------------
*/

type Props = {
  title: string;
  time: string;
  participants: number;
}

export default function SessionCard({
  title,
  time,
  participants,
}: Props) {
  return (

      /*
      |--------------------------------------------------------------------------
      | Session card
      |--------------------------------------------------------------------------
      | Displays a compact overview of a planned study session.
      |--------------------------------------------------------------------------
      */
    <View style={styles.card}>

      {/* Session time */}
      <Text style={styles.time}>{time}</Text>

      {/* Session title */}
      <Text style={styles.title}>
        {title}
      </Text>

      {/* Participant count */}
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

