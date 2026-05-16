import { StyleSheet, View } from 'react-native';
import Swiper from 'react-native-deck-swiper';

import MatchCard from '@/components/MatchCard';
import Screen from '@/components/ui/Screen';

import { users } from '@/data/mock';

export default function MatchScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <Swiper
          cards={users}
          renderCard={(card) => <MatchCard user={card} />}
          stackSize={3}
          backgroundColor="transparent"
          animateCardOpacity
          verticalSwipe={false}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50,
  },
});