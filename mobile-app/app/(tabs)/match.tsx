import { Dimensions, StyleSheet, View } from "react-native";
import Swiper from "react-native-deck-swiper";

import MatchCard from "@/components/MatchCard";
import Screen from "@/components/ui/Screen";

import { users } from "@/data/mock";

const { width, height } = Dimensions.get("window");

export default function MatchScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <Swiper
          cards={users}
          renderCard={(card) =>
            card ? <MatchCard user={card} /> : <View />
          }
          stackSize={3}
          backgroundColor="transparent"
          animateCardOpacity
          horizontalSwipe
          horizontalThreshold={width * 0.22}
          verticalSwipe={false}
          cardHorizontalMargin={0}
          cardVerticalMargin={0}
          infinite
          disableTopSwipe
          disableBottomSwipe

          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: {
                  backgroundColor: "#FF4D67",
                  color: "white",
                  fontSize: 32,
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  borderRadius: 16,
                  overflow: "hidden",
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  marginTop: 40,
                  marginLeft: -40,
                },
              },
            },

            right: {
              title: "LIKE",
              style: {
                label: {
                  backgroundColor: "#4CD964",
                  color: "white",
                  fontSize: 32,
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  borderRadius: 16,
                  overflow: "hidden",
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  marginTop: 40,
                  marginLeft: 40,
                },
              },
            },
          }}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    paddingBottom: 70,
  },
});