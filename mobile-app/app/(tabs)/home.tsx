import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { router } from 'expo-router';

/*
|--------------------------------------------------------------------------
| Mock data imports
|--------------------------------------------------------------------------
| These files currently simulate backend data.
| Later, these can be replaced with API/database requests.
|--------------------------------------------------------------------------
*/
import { users } from '@/data/users';
import { sessions } from '@/data/sessions';
import { chats } from '@/data/chats';

/*
|--------------------------------------------------------------------------
| Reusable UI components
|--------------------------------------------------------------------------
| Each section of the home screen is split into reusable cards
| to keep the screen modular, scalable, and easier to maintain.
|--------------------------------------------------------------------------
*/
import SessionCard from '@/components/cards/SessionCard';
import ChatPreviewCard from '@/components/cards/ChatPreviewCard';
import DiscoverPreviewCard from '@/components/cards/DiscoverPreviewCard';

import { COLORS } from '@/constants/theme';

export default function HomeScreen() {
  return (
      /*
      |--------------------------------------------------------------------------
      | Main scroll container
      |--------------------------------------------------------------------------
      | Allows vertical scrolling for the entire home screen content.
      | Scroll indicator is hidden for a cleaner mobile UI.
      |--------------------------------------------------------------------------
      */
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* ------------------------------------------------------------------ */}
      {/* Welcome / Hero Section                                             */}
      {/* ------------------------------------------------------------------ */}
      <View style={styles.header}>
        <Text style={styles.greeting}>
          Welcome back 👋
        </Text>

        <Text style={styles.subtitle}>
          Find study buddies, organize sessions,
          and stay connected.
        </Text>
      </View>
      {/* ------------------------------------------------------------------ */}
      {/* Quick Action Buttons                                               */}
      {/* ------------------------------------------------------------------ */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={styles.primaryAction}
          activeOpacity={0.8}
          onPress={() => router.push('/match')}
        >
          <Text style={styles.primaryActionText}>
            Discover
          </Text>
        </TouchableOpacity>

        {/* Navigate to calendar / session creation screen */}
        <TouchableOpacity
          style={styles.secondaryAction}
          activeOpacity={0.8}
          onPress={() => router.push('/calendar?creat=true')}
        >
          <Text style={styles.secondaryActionText}>
            Create Session
          </Text>
        </TouchableOpacity>
      </View>

      {/* ------------------------------------------------------------------ */}
      {/* Match Preview Card                                                 */}
      {/* ------------------------------------------------------------------ */}
      {/*
        Displays how many study matches are currently available.
        The amount is dynamically calculated from the users array.
      */}
      <DiscoverPreviewCard count={users.length}/>

      {/* ------------------------------------------------------------------ */}
      {/* Upcoming Sessions Section                                          */}
      {/* ------------------------------------------------------------------ */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          Upcoming Sessions
        </Text>
      </View>

      {sessions.map((session) => (
          <SessionCard
              key={session.id}
              title={session.title}
              time={session.time}
              participants={session.participants}
          />
      ))}

      {/* ------------------------------------------------------------------ */}
      {/* Recent Chats Section                                               */}
      {/* ------------------------------------------------------------------ */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          Recent Chats
        </Text>
      </View>

      {chats.map((chat) => (
          <ChatPreviewCard
              key={chat.id}
              name={chat.name}
              message={chat.message}
          />
      ))}

      <View style={{ height: 120 }} />
    </ScrollView>
  );
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
| Centralized styling for the HomeScreen component.
|--------------------------------------------------------------------------
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 70,
    marginBottom: 30,
  },

  greeting: {
    fontSize: 36,
    fontWeight: '800',
    color: COLORS.text,
    marginBottom: 10,
  },

  subtitle: {
    color: COLORS.subtext,
    fontSize: 17,
    lineHeight: 26,
  },

  actionsContainer: {
    flexDirection: 'row',
    gap: 14,
    marginBottom: 28,
  },

  primaryAction: {
    flex: 1,
    backgroundColor: COLORS.primary,
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
    backgroundColor: COLORS.card,
    paddingVertical: 18,
    borderRadius: 22,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  secondaryActionText: {
    color: COLORS.text,
    fontWeight: '700',
    fontSize: 16,
  },

  sectionHeader: {
    marginBottom: 16,
    marginTop: 8,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.text,
  },
});

