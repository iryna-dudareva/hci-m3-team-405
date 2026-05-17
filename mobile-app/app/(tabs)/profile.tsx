import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { profile } from '@/data/profile';

import { COLORS, SHADOWS } from '@/constants/theme';

export default function ProfileScreen() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>
        Profile
      </Text>

      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            T
          </Text>
        </View>

        <Text style={styles.name}>
          {profile.name}
        </Text>

        <Text style={styles.subject}>
          {profile.subject}
        </Text>

        <Text style={styles.bio}>
          {profile.bio}
        </Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>
            🔥 {profile.streak}
          </Text>

          <Text style={styles.statLabel}>
            Day Streak
          </Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>
            ⭐ {profile.matches}
          </Text>

          <Text style={styles.statLabel}>
            Study Matches
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Personal Information
        </Text>

        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>
            Email
          </Text>

          <Text style={styles.infoValue}>
            {profile.email}
          </Text>

          <View style={styles.divider} />

          <Text style={styles.infoLabel}>
            University
          </Text>

          <Text style={styles.infoValue}>
            {profile.university}
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Interests
        </Text>

        <View style={styles.interestsContainer}>
          {profile.interests.map((interest) => (
            <View
              key={interest}
              style={styles.interestTag}
            >
              <Text style={styles.interestText}>
                {interest}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <TouchableOpacity
          style={styles.settingsButton}
          activeOpacity={0.8}
        >
          <Text style={styles.settingsText}>
            Settings
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.logoutButton}
          activeOpacity={0.8}
        >
          <Text style={styles.logoutText}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: 120 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 38,
    fontWeight: '800',
    color: COLORS.text,
    marginTop: 70,
    marginBottom: 28,
  },

  profileCard: {
    backgroundColor: COLORS.card,
    borderRadius: 32,
    padding: 28,
    alignItems: 'center',
    marginBottom: 24,

    ...SHADOWS.card,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: COLORS.primary,

    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 20,
  },

  avatarText: {
    color: '#FFFFFF',
    fontSize: 42,
    fontWeight: '800',
  },

  name: {
    fontSize: 30,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 8,
  },

  subject: {
    color: COLORS.subtext,
    fontSize: 17,
    marginBottom: 18,
  },

  bio: {
    color: COLORS.subtext,
    textAlign: 'center',
    lineHeight: 24,
    fontSize: 15,
  },

  statsContainer: {
    flexDirection: 'row',
    gap: 14,
    marginBottom: 28,
  },

  statCard: {
    flex: 1,
    backgroundColor: COLORS.card,
    borderRadius: 24,
    paddingVertical: 24,
    alignItems: 'center',

    ...SHADOWS.card,
  },

  statNumber: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 8,
  },

  statLabel: {
    color: COLORS.subtext,
    fontSize: 15,
  },

  section: {
    marginBottom: 28,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 16,
  },

  infoCard: {
    backgroundColor: COLORS.card,
    borderRadius: 24,
    padding: 22,

    ...SHADOWS.card,
  },

  infoLabel: {
    color: COLORS.subtext,
    marginBottom: 6,
    fontSize: 14,
  },

  infoValue: {
    color: COLORS.text,
    fontSize: 17,
    fontWeight: '600',
  },

  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 18,
  },

  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },

  interestTag: {
    backgroundColor: COLORS.card,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,

    ...SHADOWS.card,
  },

  interestText: {
    color: COLORS.text,
    fontWeight: '600',
  },

  settingsButton: {
    backgroundColor: COLORS.card,
    paddingVertical: 20,
    borderRadius: 22,
    alignItems: 'center',
    marginBottom: 14,

    ...SHADOWS.card,
  },

  settingsText: {
    color: COLORS.text,
    fontSize: 17,
    fontWeight: '700',
  },

  logoutButton: {
    backgroundColor: '#FEE2E2',
    paddingVertical: 20,
    borderRadius: 22,
    alignItems: 'center',
  },

  logoutText: {
    color: COLORS.danger,
    fontSize: 17,
    fontWeight: '700',
  },
});

