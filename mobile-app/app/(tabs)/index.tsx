import { StyleSheet, Text, View } from 'react-native';

import Screen from '@/components/ui/Screen';
import XPBar from '@/components/XPBar';

import { COLORS } from '@/constants/theme';

export default function HomeScreen() {
  return (
    <Screen>
      <Text style={styles.title}>Welcome back Tristan 👋</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Daily Progress</Text>
        <XPBar />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Today's Goal</Text>
        <Text style={styles.goal}>Complete 2 Study Sessions</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    color: COLORS.text,
    fontSize: 32,
    fontWeight: '700',
    marginTop: 10,
    marginBottom: 24,
  },

  card: {
    backgroundColor: COLORS.card,
    borderRadius: 24,
    padding: 20,
    marginBottom: 20,
  },

  cardTitle: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 14,
  },

  goal: {
    color: COLORS.subtext,
    fontSize: 16,
  },
});