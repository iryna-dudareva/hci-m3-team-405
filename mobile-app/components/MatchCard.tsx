import { COLORS } from '@/constants/theme';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function MatchCard({ user }: any) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: user.image }} style={styles.image} />

      <View style={styles.overlay}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.info}>{user.subject}</Text>
        <Text style={styles.info}>{user.semester}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: COLORS.card,
  },

  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 24,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },

  name: {
    color: 'white',
    fontSize: 30,
    fontWeight: '700',
  },

  info: {
    color: 'white',
    fontSize: 16,
    marginTop: 4,
  },
});