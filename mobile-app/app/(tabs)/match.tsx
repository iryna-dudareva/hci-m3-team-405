import { Dimensions, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-deck-swiper";

import MatchCard from "@/components/MatchCard";
import Screen from "@/components/ui/Screen";

import { users } from "@/data/mock";

const { width, height } = Dimensions.get("window");

export default function MatchScreen() {
  return (
    <Screen>
      <>
        <Text style={styles.title}>
          Find your Study Buddy
        </Text>
        <View style={styles.container}>
          <Swiper
            cards={users}
            renderCard={(card) => card ? <MatchCard user={card} /> : <View /> }
            stackSize={1}
            backgroundColor="transparent"
            animateCardOpacity
            animateOverlayLabelsOpacity
            disableBottomSwipe
            disableTopSwipe
            verticalSwipe={false}
            cardVerticalMargin={0}
            cardHorizontalMargin={0}
            outputRotationRange={["-8deg", "0deg", "8deg"]}

            overlayLabels={{
              left: {
                title: "PASS",
                style: {
                  label: {
                    backgroundColor: "#FF4D67",
                    color: "white",
                    fontSize: 30,
                    fontWeight: "700",
                    paddingHorizontal: 22,
                    paddingVertical: 12,
                    borderRadius: 18,
                    overflow: "hidden",
                  },
                  wrapper: {
                    flexDirection: "column",
                    alignItems: "flex-end",
                    justifyContent: "flex-start",
                    marginTop: 60,
                    marginLeft: -35,
                  },
                },
              },

              right: {
                title: "MATCH",
                style: {
                  label: {
                    backgroundColor: "#4CD964",
                    color: "white",
                    fontSize: 30,
                    fontWeight: "700",
                    paddingHorizontal: 22,
                    paddingVertical: 12,
                    borderRadius: 18,
                    overflow: "hidden",
                  },
                  wrapper: {
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    marginTop: 60,
                    marginLeft: 35,
                  },
                },
              },
            }}

            containerStyle={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}

            cardStyle={{
              width: width * 0.92,
              height: height * 0.72,

              borderRadius: 32,
            }}
          />
        </View>
      </>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 40,
  },

  title: {
    fontSize: 34,
    fontWeight: "800",
    color: "#111",
    marginTop: 10,
    marginBottom: 26,
    letterSpacing: -1,
  },
});