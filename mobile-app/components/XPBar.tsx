import { COLORS } from '@/constants/theme';
import { StyleSheet, Text, View } from 'react-native';

export default function XPBar() {
  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.label}>Level 12</Text>
        <Text style={styles.label}>740 / 1000 XP</Text>
      </View>

      <View style={styles.barBackground}>
        <View style={styles.barFill} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  label: {
    color: COLORS.text,
    fontWeight: '600',
  },

  barBackground: {
    height: 12,
    backgroundColor: COLORS.border,
    borderRadius: 20,
    overflow: 'hidden',
  },

  barFill: {
    width: '74%',
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 20,
  },
});