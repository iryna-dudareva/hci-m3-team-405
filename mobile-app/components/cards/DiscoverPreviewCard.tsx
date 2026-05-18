import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { router } from 'expo-router';

import { COLORS, SHADOWS } from '@/constants/theme';


/*
|--------------------------------------------------------------------------
| Component Props
|--------------------------------------------------------------------------
| count -> number of currently available study matches
|--------------------------------------------------------------------------
*/
type Props = {
  count: number;
};

export default function DiscoverPreviewCard({count}: Props) {

  /*
|--------------------------------------------------------------------------
| Dynamic singular / plural text handling
|--------------------------------------------------------------------------
| Adjusts the displayed text grammatically depending
| on the amount of matches available.
|--------------------------------------------------------------------------
*/
  const studentText = count === 1 ? 'student' : 'students';

  const matchText = count === 1 ? 'matches' : 'match';
  return (

      /*
   |--------------------------------------------------------------------------
   | Main preview card
   |--------------------------------------------------------------------------
   | Displays a highlighted overview of available study matches.
   |--------------------------------------------------------------------------
   */
    <View style={styles.card}>

      {/* Card title */}
      <Text style={styles.title}>
        New Study Matches
      </Text>

      {/* Dynamic match preview text */}
      <Text style={styles.subtitle}>
        <Text style={styles.subtitle}>
          {count} {studentText} {matchText}
          {' '}your interests and study goals.
        </Text>
      </Text>

      {/* Navigation button to matchmaking screen */}
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

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
| Centralized styling for the DiscoverPreviewCard component.
|--------------------------------------------------------------------------
*/

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
