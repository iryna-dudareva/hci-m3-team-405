import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import { router } from 'expo-router';

import { COLORS, SHADOWS } from '@/constants/theme';

/*
|--------------------------------------------------------------------------
| Component Props
|--------------------------------------------------------------------------
| name    -> name of the chat partner
| message -> latest chat preview message
|--------------------------------------------------------------------------
*/

type Props = {
  name: string;
  message: string;
};

export default function ChatPreviewCard({
  name,
  message,
}: Props) {
  return (

      /*
      |--------------------------------------------------------------------------
      | Chat preview card
      |--------------------------------------------------------------------------
      | Displays a compact preview of a recent conversation.
      | Clicking the card navigates to the chat screen.
      |--------------------------------------------------------------------------
      */
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => router.push('/chat')}
    >

      {/* Chat partner name */}
      <Text style={styles.name}>
        {name}
      </Text>

      {/* Last message preview */}
      <Text style={styles.message}>
        {message}
      </Text>
    </TouchableOpacity>
  );
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
| Centralized styling for the ChatPreviewCard component.
|--------------------------------------------------------------------------
*/

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

